module.exports = {

    getUserProducts: async (req, res) => {
        const db = req.app.get('db');

        const userProducts = await db.product.get_user_products();

        res.status(200).send(userProducts);
    },

    purchaseProduct: (req, res) => {
        const db = req.app.get('db');
        const cart = req.session.cart;

    },

    downloadProduct: async (req, res) => {
        const db = req.app.get('db');
        const { product_id } = req.params;
        //setup with AWS S3//
    }

}