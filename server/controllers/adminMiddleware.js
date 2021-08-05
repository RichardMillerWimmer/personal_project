module.exports = {

    adminCheck: async (req, res, next) => {
        const db = req.app.get('db');
        const user = req.session.user;

        // console.log(user)

        if (user.admin === false || null) {
            return res.status(403).send('you do not have access')
        }
        if (user.admin === true) {

            next()
        }
    }

}