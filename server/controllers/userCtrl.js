module.exports = {

    getUserProducts: async (req, res) => {
        const db = req.app.get('db');
        const user = req.session.user;
        // console.log(user)

        if (!user) {
            return res.sendStatus(200)
        }

        const userProducts = await db.user.get_user_products(user.id);
        // console.log(userProducts)
        res.status(200).send(userProducts);
    },

    purchaseProduct: async (req, res, next) => {
        const db = req.app.get('db');
        const cart = req.session.cart;
        const user = req.session.user;

        // console.log("user id " + user.id)
        // console.log(cart.items)
        const order = await db.user.add_order(user.id);
        // console.log(order[0].order_id)

        for (let i = 0; i < cart.items.length; i++) {
            // console.log(order[0].order_id)
            // console.log(cart.items[i].product_id)
            await db.user.purchase_products(order[0].order_id, cart.items[i].product_id)
        }

        next()

        // res.status(200).send('something here')


        //figure this out with stripe and getUserProducts
    },

    downloadProduct: async (req, res) => {
        const db = req.app.get('db');
        const { product_id } = req.params;
        // const user = req.session.user
        //setup with AWS S3//

        const link = await db.user.download_product(product_id);
        console.log(link)

        res.status(200).send(link);
    }

    // downloadProduct: async (req, res) => {
    //     const db = req.app.get('db');
    //     const { product_id } = req.params;

    //     const bucketParams = await db.user.download_product(product_id);

    //     const { bucket, objectKey } = bucketParams;

    //     const download = {
    //         Bucket: S3_BUCKET,
    //         Key: 'Product_1_Concrete.png'
    //     }

    // const data = await s3.getObject(download, (data, error) => {
    //     if (error) {
    //         console.log(error)
    //     } else {
    //         // console.log(data)
    //     }

    //     })
    // }
    // console.log(data)

    // const download = data.Body.toString('utf-8');

    // console.log(download)

    // res.status(200).send(download)
    // }

    // downloadProduct: async (bucket, objectKey) => {
    //     try {
    //         const params = {
    //             Bucket: bucket,
    //             Key: objectKey
    //         }

    //         const data = await s3.getObject(params).promise();

    //         return data.Body.toString('utf-8');
    //     } catch (e) {
    //         throw new Error(`Could not retrieve file from S3: ${e.message}`)
    //     }

    // }
}
// getObject('polymathbucket', 'Materials-Stones.jpg');
