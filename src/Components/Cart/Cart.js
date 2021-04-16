import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../../redux/cartReducer';
import CartBox from '../CartBox/CartBox';
import Button from '../Button/Button';




function Cart(props) {
    // const [cart, setCart] = useState([]);

    console.log(props)

    useEffect(() => {
        getCart()
    }, [])

    function getCart() {
        axios.get('/api/cart')
            .then(res => {
                console.log(res.data)
                props.updateCart(res.data)
            })
            .catch(err => console.log(err))
    }

    function checkout() {
        axios.post('/api/userproduct')
            .then(res => {
                console.log(res.data)
                props.updateCart(res.data)
            })
            .catch(err => console.log(err))
    }

    let cartMapped = props.cart.items.map((product) => {
        return <div key={product.product_id}>
            <CartBox product={product}></CartBox>
        </div>
    })

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
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, { updateCart })(Cart);