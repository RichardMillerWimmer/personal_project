const { decodeBase64 } = require("bcryptjs");


module.exports = {

    getCart: (req, res) => {
        const cart = req.session.cart;
        res.status(200).send(cart);
    },

    addToCart: async (req, res) => {
        const db = req.app.get('db');
        const cart = req.session.cart;
        // console.log(cart)
        // const items = req.session.cart.items;
        // console.log(items)
        // const total = req.session.cart.total;
        // console.log(total)
        const { product_id } = req.params;

        product = await db.product.get_product(product_id);
        cart.items.push(product[0]);
        // console.log(product[0].price)
        cart.total += product[0].price
        // console.log(cart)

        res.status(200).send(cart);

    },

    removeFromCart: (req, res) => {
        // const db = req.app.get('db');
        const cart = req.session.cart;
        const { product_id } = req.params
        let items = req.session.cart.items;

        const currentItems = items.filter(elem => {
            // console.log(elem)
            if (elem.product_id === +product_id) {
                cart.total -= elem.price
            }
            return elem.product_id !== +product_id
        })

        // console.log(currentItems);
        cart.items = currentItems
        // console.log(cart)

        res.status(200).send(cart);
    },

    clearCart: (req, res) => {
        let cart = req.session.cart;
        cart = [];
        res.status(200).send(cart)
    }

}