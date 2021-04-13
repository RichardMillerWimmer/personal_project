import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';




function UserProfile(props) {
    // const [userId, setUserId] = useState('')
    const [userProducts, setUserProducts] = useState([])

    console.log(props)
    // console.log(userProducts)

    useEffect(() => {
        getUserProducts()
    }, [])

    function getUserProducts() {
        axios.get('/api/userproduct')
            .then(res => {
                console.log(res.data)
                setUserProducts(res.data)
            })
            .catch(err => console.log(err))
    }

    let mappedUserProducts = userProducts.map((product) => {
        return <div key={product.product_id}>
            <h3>{product.name}</h3>
            <img src={product.image_one} />
        </div>
    })


    return (
        <div className="userProfile">
            <h1>Your Polymath Packages Collection</h1>
            {mappedUserProducts}
        </div>
    );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(UserProfile);