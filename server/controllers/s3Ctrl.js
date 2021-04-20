require('dotenv').config();
const { PinpointEmail } = require('aws-sdk');
const AWS = require('aws-sdk');
const { setRandomFallback } = require('bcryptjs');


const {
    S3_BUCKET,
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    REGION
} = process.env
const s3 = new AWS.S3();

module.exports = {
    downloadProduct: async (req, res) => {
        const db = req.app.get('db');
        const { product_id } = req.params;

        const objectKey = await db.user.download_product(product_id);

        const download = {
            Bucket: S3_BUCKET,
            Key: 'Product_1_Concrete.png'
        }

        // const data = await s3.getObject(download)
        //     .createReadStream()
        //     .pipe(res)

        const data = await s3.getObject(download, (error, res) => {
            if (error) {
                console.log('error' + error)
            } else {
                console.log(res)

            }
        }).send()
    }
}