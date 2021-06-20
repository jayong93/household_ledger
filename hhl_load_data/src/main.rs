use hhl_db_accessor;
use lambda_http::{
    handler,
    lambda_runtime::{self, Context, Error},
    Request, RequestExt, Response,
};
use serde_json::to_string;
use tokio;

#[tokio::main]
async fn main() -> Result<(), Error> {
    let print_err = |req, ctx| async {
        let ret = func(req, ctx).await;
        if let Err(err) = ret.as_ref() {
            println!("Error: {:?}", err);
        }
        ret
    };

    lambda_runtime::run(handler(print_err)).await?;
    Ok(())
}

async fn func(req: Request, _: Context) -> Result<Response<String>, Error> {
    let db_client = hhl_db_accessor::create_client();
    let query = req.query_string_parameters();

    let year_month = query
        .get("year_month")
        .and_then(|v| v.parse().ok())
        .ok_or_else(|| "query has no 'year_month' param")?;
    let range_start = query.get("start").and_then(|v| v.parse::<u64>().ok());
    let range_end = query.get("end").and_then(|v| v.parse::<u64>().ok());
    let time_range = match (range_start, range_end) {
        (None, None) => None,
        (None, Some(end)) => Some(0..end),
        (Some(start), None) => Some(start..u64::MAX),
        (Some(start), Some(end)) => Some(start..end),
    };
    let data = hhl_db_accessor::load_data(&db_client, year_month, time_range).await?;
    let data: Vec<_> = data.into_iter().filter_map(|data| data.ok()).collect();

    Ok(Response::builder()
        .header("Access-Control-Allow-Origin", "*")
        .body(to_string(&data)?)?)
}
