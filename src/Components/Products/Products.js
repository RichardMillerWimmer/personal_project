import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { updateProducts } from '../../redux/productsReducer';


import Filter from '../Filter/Filter';
import ProductBox from '../ProductBox/ProductBox';



function Products(props) {

    useEffect(() => {
        getProducts()
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

    // console.log(props.products.productList)

    let mappedProducts = props.products.productList.map((product) => {
        // console.log(product)
        return <div key={product.product_id}>
            <ProductBox product={product}></ProductBox>
        </div>
    })

    return (
        <div className="App">
            {/* <h1>Products Component</h1> */}
            <Filter />
            {mappedProducts}

        </div>
    );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateProducts })(Products);