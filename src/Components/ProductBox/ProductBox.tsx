import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Product } from '../../redux/productsReducer';

type ProductBoxProps = {
    product: Product
}

type TypeFromRedux = ReturnType<typeof mapStateToProps>

type Type = ProductBoxProps & TypeFromRedux

function ProductBox(props: Type) {

    return (
        <div className="productBox">
            <Link to={{ pathname: `/product/${props.product_id}`, state: { product: props } }}>
                <img src={props.image_one} alt={props.name} />
            </Link>
        </div>
    );
};

const mapStateToProps = (reduxState: any) => reduxState;

export default connect(mapStateToProps)(ProductBox);