import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import productsReducer, { updateProducts } from '../../redux/productsReducer';


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
                props.updateProducts(res.data)
            })
            .catch(err => console.log(err))
    }


    // let mappedProducts = props.productList.map((product) => {
    //     return <div key={product.product_id}><Link to={`/product/${product.product_id}`} >
    //         <img src={product.image_one} />
    //         <h3>{product.name}</h3>
    //     </Link>
    //     </div>
    // })

    return (
        <div className="App">
            <h1>Products Component</h1>
            <Filter />
            {/* {mappedProducts} */}

        </div>
    );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateProducts })(Products);