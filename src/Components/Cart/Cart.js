import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../../redux/cartReducer';
import CartBox from '../CartBox/CartBox';




function Cart(props) {
    const [cart, setCart] = useState([]);

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
            {cartMapped}
            <button onClick={checkout}>checkout</button>
        </div>
    );
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, { updateCart })(Cart);