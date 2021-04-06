module.exports = {

    addProduct: async (req, res) => {
        const db = req.app.get('db');
        const { user_id, admin } = req.session.user;
        const { name, description, price, image_one, image_two, image_three, download_link } = req.body;

        await db.admin.add_product(name, description, price, image_one, image_two, image_three, download_link);

        res.sendStatus(200);
    },
    // revist for editing only protions of product
    editProduct: async (req, res) => {
        const db = req.app.get('db');
        const { user_id, admin } = req.session.user;
        const { name, description, price, image_one, image_two, image_three, download_link } = req.body;
        const { product_id } = req.params;

        await db.admin.edit_product(product_id, name, description, price, image_one, image_two, image_three, download_link);

        res.sendStatus(200);
    },

    deleteProduct: async (req, res) => {
        const db = req.app.get('db');
        const { user_id, admin } = req.session.user;
        const { product_id } = req.params;

        await db.admin.delete_product(product_id);

        res.sendStatus(200);
    }

}