import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateCart } from '../../redux/cartReducer';
import { updateProducts } from '../../redux/productsReducer';
import { updateUserProducts } from '../../redux/userProductsReducer';


import Filter from '../Filter/Filter';
import ProductBox from '../ProductBox/ProductBox';



function Products(props) {

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        // console.log('user products hit')
        if (props.auth.userId) {
            getUserProducts()
            // console.log(props.auth.userId)
        }
    }, [props.auth])

    useEffect(() => {
        getUserCart()
    }, [])

    function getProducts() {
        // console.log('get products hit')
        axios.get('/api/product')
            .then(res => {
                // console.log(res.data)
                props.updateProducts(res.data)
            })
            .catch(err => console.log(err))
    }

    function getUserProducts() {
        // console.log('axios hit')
        axios.get('/api/userproduct')
            .then(res => {
                // console.log(res.data)
                props.updateUserProducts(res.data)
            })
            .catch(err => console.log(err))
    }

    function getUserCart() {
        axios.get('/api/cart')
            .then(res => {
                props.updateCart(res.data)
            })
    }


    // console.log(props.products.productList)

    let mappedProducts = props.products.productList.map((product) => {
        // console.log(product)
        return <div key={product.product_id}>
            <ProductBox product={product}></ProductBox>
        </div>
    })

    return (
        <div className="products">
            <h1>Polymath Texture Packages</h1>
            <Filter />
            <div className='productFlex'>
                {mappedProducts}
            </div>
        </div>
    );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateProducts, updateUserProducts, updateCart })(Products);