import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateProducts } from '../../redux/productsReducer';
import Button from '../Button/Button'



function Filter(props) {
    const [searchText, setSearchText] = useState('');


    function searchProducts() {
        // console.log(searchText)
        axios.get(`/api/products?description=${searchText}`)
            .then(res => {
                props.updateProducts(res.data)
            })
            .catch(err => console.log(err))
    };

    function clearSearch() {
        axios.get('/api/products')
            .then(res => {
                // console.log(res.data)
                props.updateProducts(res.data)
                setSearchText('')
            })
            .catch(err => console.log(err))
    };

    const enterPress = (event) => {
        if (event.keyCode === 13) {
            searchProducts()
        }
    };

    return (
        <div className="filter">
            <form className='searchBar'>
                <input
                    placeholder='search products'
                    onChange={event => setSearchText(event.target.value)}
                    value={searchText}
                    onKeyPress={enterPress}
                />
                <Button onClick={searchProducts} type='submit'  >search</Button>
                <Button onClick={clearSearch}>clear</Button>
            </form>
        </div>
    );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateProducts })(Filter);