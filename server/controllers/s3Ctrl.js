require('dotenv').config();

const fs = require('fs');
const AWS = require('aws-sdk');


const {
    S3_BUCKET,
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    REGION
} = process.env

const s3 = new AWS.S3({
    region: 'us-east-2'
});


module.exports = {
    downloadProduct: async (req, res) => {
        const db = req.app.get('db');
        const { product_id } = req.params;

        const objectKey = await db.user.download_product(product_id);

        const params = {
            Bucket: S3_BUCKET,
            Key: 'Product_1_Concrete.png'
        }

        // const data = await s3.getObject(download)
        //     .createReadStream()
        //     .pipe(res)

        const download = await s3.getObject(params, (error, data) => {
            if (error) {
                console.log('error' + error)
            } else {
                console.log(data)
            }
            // res.sendFile(download)
        })
        console.log(download)
        // .createReadStream()
        // download.pipe(res)
    }
}