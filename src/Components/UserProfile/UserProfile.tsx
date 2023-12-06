import { useState, useEffect, Key } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import UserBox from '../UserBox/UserBox';
import { updateUserProducts } from '../../redux/userProductsReducer';
import { Product } from '../../redux/productsReducer';



function UserProfile(props: any) {
    const [userProducts, setUserProducts] = useState([]);

    useEffect(() => {
        getUserProducts()
    }, []);

    function getUserProducts() {
        axios.get('/api/userproducts')
            .then(res => {
                props.updateUserProducts(res.data)
                setUserProducts(res.data)
            })
            .catch(err => console.log(err))
    };

    let mappedUserProducts = props.userProducts.userProductList.map((product: Product) => {
        return <div key={product.product_id as Key}>
            <UserBox {...product}></UserBox>
        </div>
    });


    return (
        <div className="userProfile">
            <h1>Your Polymath Collection</h1>
            <div className='flexUserBox'>
                {!userProducts[0] ? <h3>You have not purchased any packages.</h3> : ''}
                {mappedUserProducts}
            </div>
        </div>
    );
};

const mapStateToProps = (reduxState: any) => reduxState;

export default connect(mapStateToProps, { updateUserProducts })(UserProfile);