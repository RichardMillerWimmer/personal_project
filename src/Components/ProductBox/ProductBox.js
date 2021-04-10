
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';



function ProductBox(props) {

    console.log(props.product.image_one)

    return (
        <div className="App">
            <Link product={props.product} to={`/product/${props.product.product_id}`}>
                <img scr={'https://i.imgur.com/oAFivns.jpg'} alt={props.product.name} />
            </Link>
        </div>
    );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(ProductBox);