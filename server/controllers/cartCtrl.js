module.exports = {

    getCart: (req, res) => {
        const cart = req.session.cart;
        res.status(200).send(cart);
    },

    addToCart: async (req, res) => {
        const db = req.app.get('db');
        const cart = req.session.cart;
        const { product_id } = req.params;

        const product = await db.product.get_product(product_id);
        cart.items.push(product[0]);
        cart.total += product[0].price

        res.status(201).send(cart);
    },

    removeFromCart: (req, res) => {
        const cart = req.session.cart;
        const { product_id } = req.params
        let items = req.session.cart.items;

        const currentItems = items.filter(elem => {
            if (elem.product_id === +product_id) {
                cart.total -= elem.price
            }
            return elem.product_id !== +product_id
        })
        cart.items = currentItems

        res.status(200).send(cart);
    },

    clearCart: (req, res) => {
        let cart = req.session.cart;

        cart.total = 0
        cart.items = [];
        res.status(200).send(cart)
    }

}