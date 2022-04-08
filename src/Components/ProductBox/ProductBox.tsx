
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Product } from '../../redux/productsReducer';

type ProductBoxProps = {
    product: Product
}

type TypeFromRedux = ReturnType<typeof mapStateToProps>

type Type = ProductBoxProps & TypeFromRedux

function ProductBox(props: Type) {

    // const { product } = props
    console.log(props)

    return (
        <div className="productBox">
            <Link to={`/product/${props.product_id}`}>
                <img src={props.image_one} alt={props.name} />
            </Link>
        </div>
    );
};

const mapStateToProps = (reduxState: any) => reduxState;

export default connect(mapStateToProps)(ProductBox);