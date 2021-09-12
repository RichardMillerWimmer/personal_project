import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import UserBox from '../UserBox/UserBox';
import { updateUserProducts } from '../../redux/userProductsReducer';




function UserProfile(props) {
    const [userProducts, setUserProducts] = useState([]);

    // console.log(props)

    useEffect(() => {
        getUserProducts()
    }, []);

    function getUserProducts() {
        // console.log('axios hit')
        axios.get('/api/userproducts')
            .then(res => {
                // console.log(res.data)
                props.updateUserProducts(res.data)
                setUserProducts(res.data)
            })
            .catch(err => console.log(err))
    };

    let mappedUserProducts = props.userProducts.userProductList.map((product) => {
        return <div key={product.product_id}>
            <UserBox product={product}></UserBox>
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

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateUserProducts })(UserProfile);