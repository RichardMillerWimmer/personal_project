import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../../redux/cartReducer';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { Product } from '../../redux/productsReducer';

type TypeFromRedux = ReturnType<typeof mapStateToProps>

type Type = Product & TypeFromRedux

function CartBox(props: Type) {

    console.log(props)

    function removeFromCart() {
        axios.delete(`/api/cart/${props.product_id}`)
            .then(res => {
                console.log(res.data)
                props.updateCart(res.data)
            })
            .catch(err => console.log(err))
    };

    return (
        <div className='cartContainer'>
            <div className="cartBox">
                <div></div>
                <Link to={`/product/${props.product_id}`}  >
                    <img src={props.image_one} alt={props.name} />
                </Link>
                <div className='cartBoxInfo'>
                    <h3>{props.name}</h3>
                    <Button onClick={removeFromCart}>remove</Button>
                </div>
            </div >
        </div>
    );
};

const mapStateToProps = (reduxState: any) => reduxState;

export default connect(mapStateToProps, { updateCart })(CartBox);