import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';




function ProductDisplay(props) {
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProduct()
    }, [])

    function getProduct() {
        axios.get(`/api/product/${props.match.params.id}`)
            .then(res => {
                console.log(res.data)
                setProduct(res.data[0])
            })
            .catch(err => console.log(err))
    }

    // console.log(props.products)
    console.log(props.match.params.id)
    return (
        <div className="App">
            <div>
                <img src={product.image_one} />
            </div>
            <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>Works with Octane, Redshift, Arnold, Standard, and Cycles.</p>
                <p>{product.price}.00</p>
                <button>add</button>
            </div>

        </div >
    );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(ProductDisplay);