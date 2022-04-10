import axios from 'axios';
import React, { Key, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../../redux/cartReducer';
import CartBox from '../CartBox/CartBox';
import Button from '../Button/Button';
import { Product } from '../../redux/productsReducer';

type CartProps = {
    product: Product;
}

type TypeFromRedux = ReturnType<typeof mapStateToProps>

type Type = CartProps & TypeFromRedux


function Cart(props: Type) {

    // console.log(props)

    useEffect(() => {
        getCart()
    }, []);

    function getCart() {
        axios.get('/api/cart')
            .then(res => {
                // console.log(res.data)
                props.updateCart(res.data)
            })
            .catch(err => console.log(err))
    };

    function checkout() {
        axios.post('/api/userproducts')
            .then(res => {
                // console.log(res.data)
                props.updateCart(res.data)
                getCart()
                props.history.push('/user')
            })
            .catch(err => console.log(err))
    };

    let cartMapped = props.cart.items.map((product: Product) => {
        return <div key={product.product_id as Key}>
            <CartBox {...product}></CartBox>
        </div>
    });

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            <div className='flexCartBox'>
                {cartMapped}
            </div>
            <h3>total: ${props.cart.total}.00</h3>
            <Button onClick={checkout}>checkout</Button>
        </div>
    );
};

const mapStateToProps = (reduxState: any) => reduxState;

export default connect(mapStateToProps, { updateCart })(Cart);