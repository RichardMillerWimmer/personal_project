module.exports = {

    emailCheck: async (req, res, next) => {
        const { email } = req.body;

        console.log(email)

        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const validEmail = regex.test(email)

        if (validEmail) {

            next()
        }
        if (!validEmail) {
            return res.status(403).send('please provide a valid email')
        }
    }

}