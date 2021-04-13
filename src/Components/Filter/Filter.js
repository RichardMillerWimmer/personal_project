import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateProducts } from '../../redux/productsReducer';



function Filter(props) {
    const [searchText, setSearchText] = useState('');


    function searchProducts() {
        // console.log(searchText)
        axios.get(`/api/product?description=${searchText}`)
            .then(res => {
                props.updateProducts(res.data)
            })
            .catch(err => console.log(err))
    }

    function clearSearch() {
        axios.get('/api/product')
            .then(res => {
                // console.log(res.data)
                props.updateProducts(res.data)
                setSearchText('')
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="filter">
            {/* <h3>Filter Component</h3> */}
            <div>
                <input
                    placeholder='search products'
                    onChange={event => setSearchText(event.target.value)}
                    value={searchText}
                />
                <button onClick={searchProducts} >search</button>
                <button onClick={clearSearch}>clear</button>
            </div>
        </div>
    );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateProducts })(Filter);