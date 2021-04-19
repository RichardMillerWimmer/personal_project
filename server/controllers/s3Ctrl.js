require('dotenv').config();
const AWS = require('aws-sdk');


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

        const bucketParams = await db.user.download_product(product_id);

        const { bucket, objectKey } = bucketParams;

        const download = {
            Bucket: S3_BUCKET,
            Key: 'Product_1_Concrete.png'
        }

        const data = await s3.getObject(download, (data, error) => {
            if (error) {
                console.log(error)
            } else {
                console.log(data)
            }

        })
    }
}