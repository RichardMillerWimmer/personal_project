module.exports = {

    userDuplicateCheck: async (req, res, next) => {
        const db = req.app.get('db');
        const user = req.session.user;
        const { product_id } = req.params;

        console.log(product_id)

        const userProducts = await db.user.duplicate_check(user.id)
        console.log(userProducts)
        for (let i = 0; i < userProducts.length; i++) {
            console.log(userProducts[i].product_id)
            if (userProducts[i].product_id === +product_id) {
                return res.status(400).send('You have already purchased this product.')
            }
        }

        next()
    }

}