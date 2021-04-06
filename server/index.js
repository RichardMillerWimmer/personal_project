require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');

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

//Auth Endpoints 
app.post('/api/auth/register',)
app.post('/api/auth/login',)
app.get('/api/auth/user',)
app.delete('/api/auth/logout',)

//Product Endpoints 
app.get('/api/product',)
app.get('/api/product') //query for filter
app.get('/api/product/:product_id')

//Admin Endpoints 
//reuse get Product Endpoints for admin page
app.post('/api/product',) //body required
app.put('/api/product/:product_id',) //body required
app.delete('/api/product/:product_id')

//User Endpoints 
app.get('/api/userproduct',)
app.delete('/api/userproduct/:product_id',)
app.get('/api/userproduct/download/:product_id',)

//Cart Endpoints 
app.get('/api/cart',)
app.post('/api/cart/:product_id',)
app.delete('/api/cart/:product_id',)
app.delete('/api/cart')


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUauthoried: false
    }
})
    .then(dbInstance => {
        app.set('db', dbInstance)
        app.listen(SERVER_PORT, () => console.log(`db connected and server listening on ${SERVER_PORT}`))
    })
    .catch(error => console.log(error))

