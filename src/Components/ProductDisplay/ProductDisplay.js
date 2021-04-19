import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../../redux/cartReducer';
import Button from '../Button/Button';



function ProductDisplay(props) {
    const [product, setProduct] = useState({})

    // console.log(product)

    useEffect(() => {
        getProduct()
    }, [])

    function getProduct() {
        axios.get(`/api/product/${props.match.params.id}`)
            .then(res => {
                // console.log(res.data)
                setProduct(res.data[0])
            })
            .catch(err => console.log(err))
    }

    function addToCart() {
        axios.post(`/api/cart/${product.product_id}`)
            .then(res => {
                // console.log(res.data)
                props.updateCart(res.data)
            })
    }

    function duplicateCheck() {
        let passed = true
        for (let i = 0; i < props.cart.items.length; i++) {
            if (props.cart.items[i].product_id === product.product_id) {
                passed = false
            }
        }
        if (passed) {
            addToCart()
        } else {
            alert("this item is already in your cart")
        }
    }

    // console.log(props.products)
    // console.log(props.match.params.id)
    return (
        <div className="productDisplay">
            <div className='boxDisplay'>
                <img src={product.image_one} alt={product.name} />
            </div>
            <div className='infoDisplay'>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>Works with Octane, Redshift, Arnold, Standard, and Cycles.</p>
                <p>{product.price}.00</p>
                <Button
                    className='addBtn'
                    onClick={duplicateCheck}
                >add</Button>
            </div>
            <div className='images'>
                <img alt={product.name} />
            </div>
        </div >
    );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateCart })(ProductDisplay);