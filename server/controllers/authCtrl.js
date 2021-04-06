const bcrypt = require('bcryptjs');

module.exports = {

    register: async (req, res) => {
        const db = req.app.get('db');
        const { email, first_name, last_name, password } = req.body;

        const result = await db.user.find_user_by_email(email);
        const user = result[0];
        if (user) {
            return res.status(400).send('email already registered')
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await db.user.create_user(email, first_name, last_name, hash);

        req.session.user = newUser[0];

        res.status(200).send(req.session.user);
    },

    login: async (req, res) => {
        const db = req.app.get('db');
        const { email, password } = req.body;

        const existingUser = await db.user.find_user_by_email(email);
        const user = existingUser
        if (user) {
            return res.status(400).send('email not registered');
        }

        const isAuthenticated = bcrypt.compareSync(password, user.password);
        //check 
        if (!isAuthenticated) {
            return res.status(400).send('incorrect password');
        }

        req.session.user = { id: user.user_id, email: user.email, first_name: user.first_name, last_name: user.last_name };

        return res.status(200).send(req.session.user);
    },


    getUser: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(404);
        }
    },

    logout: async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }

}