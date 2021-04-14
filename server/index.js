require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');

const authCtrl = require('./controllers/authCtrl');
const productCtrl = require('./controllers/productsCtrl');
const adminCtrl = require('./controllers/adminCtrl');
const userCtrl = require('./controllers/userCtrl')
const cartCtrl = require('./controllers/cartCtrl');
const adminMiddleware = require('./controllers/adminMiddleware');

const app = express();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 52
    }
}));

app.use((req, res, next) => {
    if (!req.session.cart) {
        req.session.cart = {
            items: [],
            total: 0
        }
    }
    next();
})

//Auth Endpoints 
app.post('/api/auth/register', authCtrl.register);
app.post('/api/auth/login', authCtrl.login);
app.get('/api/auth/user', authCtrl.getUser);
app.delete('/api/auth/logout', authCtrl.logout);

//Product Endpoints 
app.get('/api/product', productCtrl.getProducts);
app.get('/api/product/:product_id', productCtrl.getProduct);

//Admin Endpoints 
//reuse get Product Endpoints for admin page
app.post('/api/product', adminMiddleware.adminCheck, adminCtrl.addProduct); //body required
app.put('/api/product/:product_id', adminMiddleware.adminCheck, adminCtrl.editProduct); //body required
app.delete('/api/product/:product_id', adminMiddleware.adminCheck, adminCtrl.deleteProduct);

//User Endpoints 
app.get('/api/userproduct', userCtrl.getUserProducts);
app.post('/api/userproduct', userCtrl.purchaseProduct, cartCtrl.clearCart)
app.get('/api/userproduct/download/:product_id', userCtrl.downloadProduct);

//Cart Endpoints 
app.get('/api/cart', cartCtrl.getCart);
app.post('/api/cart/:product_id', cartCtrl.addToCart); //body?
app.delete('/api/cart/:product_id', cartCtrl.removeFromCart);
app.delete('/api/cart', cartCtrl.clearCart);


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
})
    .then(dbInstance => {
        app.set('db', dbInstance)
        app.listen(SERVER_PORT, () => console.log(`db connected and server listening on ${SERVER_PORT}`))
    })
    .catch(error => console.log(error))

