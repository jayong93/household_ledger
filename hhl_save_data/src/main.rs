use hhl_db_accessor;
use lambda_http::{
    handler,
    lambda_runtime::{self, Context, Error},
    Request, RequestExt, Response,
};
use tokio;

#[tokio::main]
async fn main() -> Result<(), Error> {
    lambda_runtime::run(handler(func)).await?;
    Ok(())
}

async fn func(req: Request, _: Context) -> Result<Response<()>, Error> {
    let db_client = hhl_db_accessor::create_client();
    let data_to_insert: Vec<hhl_db_accessor::Data> = req.payload()?.ok_or_else(|| "the request has no payload")?;
    
    hhl_db_accessor::save_data(&db_client, data_to_insert.into_iter()).await?;

    Ok(Response::builder()
        .header("Access-Control-Allow-Origin", "*")
        .body(())?)
}
