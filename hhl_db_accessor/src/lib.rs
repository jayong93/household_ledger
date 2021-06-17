use dynamodb::{
    self,
    error::{BatchWriteItemError, QueryError},
    model::{AttributeValue, PutRequest, WriteRequest},
    output::BatchWriteItemOutput,
    SdkError,
};
use serde::{Deserialize, Serialize};
use std::{
    collections::HashMap,
    convert::{TryFrom, TryInto},
    ops::Range,
    str::FromStr,
};
use thiserror::Error;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Data {
    year_month: u32, // YYYYMM
    timestamp: u64,
    name: String,
    change: i64,
    memo: String,
    tag: String,
}

impl Data {
    pub fn new(
        year_month: u32,
        timestamp: u64,
        name: String,
        change: i64,
        memo: String,
        tag: String,
    ) -> Self {
        Self {
            year_month,
            timestamp,
            name,
            change,
            memo,
            tag,
        }
    }
}

#[derive(Debug, Error)]
pub enum DataParsingError {
    #[error("Attribute '{0}' does not exist")]
    AttributeNotExist(&'static str),
    #[error("Attribute has invalid value: {0:?}")]
    InvalidValue(AttributeValue),
}

fn extract_attribute<T: FromStr>(
    value: &mut HashMap<String, AttributeValue>,
    attribute_name: &'static str,
) -> Result<T, DataParsingError> {
    value
        .remove(attribute_name)
        .ok_or_else(|| DataParsingError::AttributeNotExist(attribute_name))
        .and_then(|v| match v.clone() {
            AttributeValue::N(s) | AttributeValue::S(s) => s
                .parse::<T>()
                .map_err(|_| DataParsingError::InvalidValue(v)),
            _ => Err(DataParsingError::InvalidValue(v)),
        })
}

impl TryFrom<HashMap<String, AttributeValue>> for Data {
    type Error = DataParsingError;

    fn try_from(mut value: HashMap<String, AttributeValue>) -> Result<Self, Self::Error> {
        let year_month = extract_attribute(&mut value, "year_month")?;
        let timestamp = extract_attribute(&mut value, "timestamp")?;
        let name = extract_attribute(&mut value, "name")?;
        let change = extract_attribute(&mut value, "change")?;
        let memo = extract_attribute(&mut value, "memo")?;
        let tag = extract_attribute(&mut value, "tag")?;

        Ok(Self {
            year_month,
            timestamp,
            name,
            change,
            memo,
            tag,
        })
    }
}

impl From<Data> for HashMap<String, AttributeValue> {
    fn from(data: Data) -> Self {
        let data_pair_arr = vec![
            (
                "year_month".into(),
                AttributeValue::N(data.year_month.to_string()),
            ),
            (
                "timestamp".into(),
                AttributeValue::N(data.timestamp.to_string()),
            ),
            ("name".into(), AttributeValue::S(data.name)),
            ("change".into(), AttributeValue::N(data.change.to_string())),
            ("memo".into(), AttributeValue::S(data.memo)),
            ("tag".into(), AttributeValue::S(data.tag)),
        ];
        data_pair_arr.into_iter().collect()
    }
}

pub async fn save_data(
    db: &dynamodb::Client,
    data_vec: impl Iterator<Item = Data>,
) -> Result<BatchWriteItemOutput, SdkError<BatchWriteItemError>> {
    let batch_items = db.batch_write_item();
    batch_items
        .request_items(
            "household_ledger",
            data_vec
                .into_iter()
                .map(|d| {
                    WriteRequest::builder()
                        .put_request(PutRequest::builder().set_item(Some(d.into())).build())
                        .build()
                })
                .collect::<Vec<_>>(),
        )
        .send()
        .await
}

pub async fn load_data(
    db: &dynamodb::Client,
    year_month: u32,
    time_range: Option<Range<u64>>,
) -> Result<Vec<Result<Data, DataParsingError>>, SdkError<QueryError>> {
    let mut query = db
        .query()
        .table_name("household_ledger")
        .expression_attribute_values(":ym_val", AttributeValue::N(year_month.to_string()));
    if let Some(time_range) = time_range {
        query = query
            .key_condition_expression(
                "year_month = :ym_val AND timestamp BETWEEN :timestart AND :timeend",
            )
            .expression_attribute_values(
                ":timestart",
                AttributeValue::N(time_range.start.to_string()),
            )
            .expression_attribute_values(":timeend", AttributeValue::N(time_range.end.to_string()));
    } else {
        query = query
            .key_condition_expression("year_month = :ym_val")
    }
    let result = query.send().await?;

    Ok(result
        .items
        .unwrap_or_default()
        .into_iter()
        .map(|item| item.try_into())
        .collect())
}

pub fn create_client() -> dynamodb::Client {
    dynamodb::Client::from_env()
}