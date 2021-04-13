import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { updateCart } from '../../redux/cartReducer';




function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        getCart()
    }, [])

    function getCart() {
        axios.get('/api/cart')
            .then(res => {
                console.log(res.data)
                updateCart(res.data)
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="cart">
            <h1>Cart Component</h1>
        </div>
    );
}

export default Cart;