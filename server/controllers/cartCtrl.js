const { decodeBase64 } = require("bcryptjs");


module.exports = {

    getCart: (req, res) => {
        const cart = req.session.cart;
        res.status(200).send(cart);
    },

    addToCart: async (req, res) => {
        // const db = req.app.get('db');
        const cart = req.session.cart;
        const { product_id } = req.params;


    },

    removeFromCart: (req, res) => {
        // const db = req.app.get('db');
        const cart = req.session.cart;
        const { product_id } = req.params

    },

    clearCart: (req, res) => {
        const cart = req.session.cart;
        cart = [];
        res.status(200).send(cart)
    }

}