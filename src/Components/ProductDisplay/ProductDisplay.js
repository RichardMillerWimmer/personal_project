import React from 'react';
import { connect } from 'react-redux';



function ProductDisplay(props) {

    console.log(props.product)
    return (
        <div className="App">
            <h1>{props.products.productList.name}</h1>
        </div>
    );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(ProductDisplay);