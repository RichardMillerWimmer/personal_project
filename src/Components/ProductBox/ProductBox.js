
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';



function ProductBox(props) {

    console.log(props.product)

    return (
        <div className="App">
            <Link to={`/product/${props.product.product_id}`}>
                <h3>{props.product.name}</h3>
            </Link>
        </div>
    );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(ProductBox);