import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../../redux/cartReducer';



function CartBox(props) {

    // console.log(props)

    function removeFromCart() {
        axios.delete(`/api/cart/${props.product.product_id}`)
            .then(res => {
                console.log(res.data)
                props.updateCart(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="cartBox">
            <img src={props.product.image_one} />
            <div className='cartBoxInfo'>
                <h3>{props.product.name}</h3>
                <button onClick={removeFromCart}>remove</button>
            </div>
        </div >
    );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateCart })(CartBox);