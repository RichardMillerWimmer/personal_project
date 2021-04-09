import React from 'react';
import { connect } from 'react-redux';



function ProductDisplay(props) {

    console.log(props.products.productList)
    return (
        <div className="App">
            <h1>{props.product.name}</h1>
        </div>
    );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(ProductDisplay);