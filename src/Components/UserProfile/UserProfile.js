import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import UserBox from '../UserBox/UserBox';




function UserProfile(props) {
    const [userProducts, setUserProducts] = useState([])

    console.log(props)
    // console.log(userProducts) 

    useEffect(() => {
        getUserProducts()
    }, [])

    function getUserProducts() {
        axios.get('/api/userproduct')
            .then(res => {
                // console.log(res.data)
                setUserProducts(res.data)
            })
            .catch(err => console.log(err))
    }

    let mappedUserProducts = userProducts.map((product) => {
        return <div key={product.product_id}>
            <UserBox product={product}></UserBox>
        </div>
    })


    return (
        <div className="userProfile">
            <h1>Your Polymath Collection</h1>
            <div className='flexUserBox'>
                {mappedUserProducts}
            </div>
        </div>
    );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(UserProfile);