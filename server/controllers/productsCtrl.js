module.exports = {

    getProducts: async (req, res) => {
        const db = req.app.get('db');
        if (req.query.description) {
            const filteredProducts = await db.product.search_products(req.query.description)
            res.status(200).send(filteredProducts);
        } else {
            const products = await db.product.get_all_products();
            res.status(200).send(products);
        }
    },

    getProduct: async (req, res) => {
        const db = req.app.get('db');
        const { product_id } = req.params;
        const product = await db.product.get_product(product_id);
        res.status(200).send(product)
    }

}