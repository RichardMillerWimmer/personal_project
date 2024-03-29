const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');

        const { email, firstName, lastName, password } = req.body;

        const result = await db.auth.find_user_by_email(email);

        const user = result[0];
        if (user) {
            return res.status(400).send('email already registered')
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await db.auth.create_user(email, firstName, lastName, hash);

        req.session.user = newUser[0];

        res.status(201).send(req.session.user);
    },

    login: async (req, res) => {
        const db = req.app.get('db');
        const { loginEmail, loginPassword } = req.body;

        const existingUser = await db.auth.find_user_by_email(loginEmail);

        const user = existingUser[0]

        if (!user) {
            return res.status(400).send('email not registered');
        }

        const isAuthenticated = bcrypt.compareSync(loginPassword, user.hash);
        //check 
        if (!isAuthenticated) {
            return res.status(401).send('incorrect password');
        }

        req.session.user = { userId: user.user_id, email: user.email, firstName: user.first_name, lastName: user.last_name, admin: user.admin };

        return res.status(201).send(req.session.user);
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