use hhl_db_accessor;
use lambda_http::{
    handler,
    lambda_runtime::{self, Context, Error},
    Request, RequestExt, Response,
};
use serde_json::{to_string, Value};
use tokio;

#[tokio::main]
async fn main() -> Result<(), Error> {
    lambda_runtime::run(handler(func)).await?;
    Ok(())
}

async fn func(req: Request, _: Context) -> Result<Response<String>, Error> {
    let db_client = hhl_db_accessor::create_client();
    let payload: Value = req.payload()?.ok_or_else(|| "request has no payload")?;
    let payload = payload
        .as_object()
        .ok_or_else(|| "payload is not a json object")?;

    let year_month = payload
        .get("year_month")
        .and_then(|v| v.as_i64())
        .ok_or_else(|| "payload object has invalid 'year_month' field")?;
    let time_range = payload
        .get("time_range")
        .and_then(|v| v.as_object())
        .and_then(|obj| {
            let start = obj
                .get("start")
                .and_then(|start| start.as_i64().map(|v| v as u64));
            let end = obj
                .get("end")
                .and_then(|end| end.as_i64().map(|v| v as u64));
            match (start, end) {
                (None, None) => None,
                (None, Some(end)) => Some(0..end),
                (Some(start), None) => Some(start..u64::MAX),
                (Some(start), Some(end)) => Some(start..end),
            }
        });
    let data = hhl_db_accessor::load_data(&db_client, year_month as _, time_range).await?;
    let data: Vec<_> = data.into_iter().filter_map(|data| data.ok()).collect();

    Ok(Response::builder()
        .header("Access-Control-Allow-Origin", "*")
        .body(to_string(&data)?)?)
}
