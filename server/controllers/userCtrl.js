module.exports = {

    getUserProducts: async (req, res) => {
        const db = req.app.get('db');

        const userProducts = await db.user.get_user_products();

        res.status(200).send(userProducts);
    },

    purchaseProduct: async (req, res) => {
        const db = req.app.get('db');
        const cart = req.session.cart;
        const user = req.session.user;
        //setup with stripe?
        //add to db which table? orders
        await db.user.add_order(user.user_id);
        for (let i = 0; i < cart.items.length - 1; i++) {
            await db.user.purchase_products(cart.item[i].product_id)
        }
        res.status(200).send('i dont know yet')
        //figure this out with stripe and getUserProducts
    },

    downloadProduct: async (req, res) => {
        const db = req.app.get('db');
        const { product_id } = req.params;
        //setup with AWS S3//
        const link = await db.user.download_product(product_id);

        res.status(200).send(link);
    }

}