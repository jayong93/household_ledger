use hhl_db_accessor;
use lambda_http::{
    handler,
    lambda_runtime::{self, Context, Error},
    Request, RequestExt, Response,
};
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

const MAX_DATA_NUM: usize = 25;

async fn func(req: Request, _: Context) -> Result<Response<()>, Error> {
    let db_client = hhl_db_accessor::create_client();
    let data_to_insert: Vec<hhl_db_accessor::Data> =
        req.payload()?.ok_or_else(|| "the request has no payload")?;

    for data_window in data_to_insert.chunks(MAX_DATA_NUM) {
        hhl_db_accessor::save_data(&db_client, data_window.into_iter().cloned()).await?;
    }

    Ok(Response::builder()
        .header("Access-Control-Allow-Origin", "*")
        .body(())?)
}
