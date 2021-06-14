use lambda_http::{
    handler,
    lambda_runtime::{self, Context, Error},
    Request, RequestExt, Response,
};
use serde_json::json;
use tokio;

#[tokio::main]
async fn main() -> Result<(), Error> {
    lambda_runtime::run(handler(func)).await?;
    Ok(())
}

async fn func(req: Request, _: Context) -> Result<Response<String>, Error> {
    let query_param = req.query_string_parameters();
    let first_name = query_param.get("name").unwrap_or("Test");

    Ok(Response::builder()
        .header("Access-Control-Allow-Origin", "*")
        .body(json!({ "message": format!("Hello, {}!", first_name) }).to_string())?)
}
