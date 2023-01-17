module.exports = {

    addProduct: async (req, res) => {
        const db = req.app.get('db');
        const { name, description, price, imageOne, imageTwo, downloadLink } = req.body;


        await db.admin.add_product(name, description, price, imageOne, imageTwo, downloadLink);

        const products = await db.product.get_all_products();

        res.status(201).send(products);
    },
    editProduct: async (req, res) => {
        const db = req.app.get('db');
        const { name, description, price, imageOne, imageTwo, downloadLink } = req.body;
        const { product_id } = req.params;

        await db.admin.edit_product(product_id, name, description, price, imageOne, imageTwo, downloadLink);

        const products = await db.product.get_all_products();

        res.status(201).send(products);
    },

    deleteProduct: async (req, res) => {
        const db = req.app.get('db');
        const { product_id } = req.params;

        await db.admin.delete_product(product_id);

        const products = await db.product.get_all_products();

        res.status(200).send(products);
    }

}