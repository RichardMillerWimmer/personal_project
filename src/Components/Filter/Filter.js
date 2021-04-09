import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateProducts } from '../../redux/productsReducer';



function Filter(props) {
    const [searchText, setSearchText] = useState('');


    function searchProducts() {
        console.log(searchText)
        axios.get('/api/product', { searchText })
            .then(res => {
                props.updateProducts(res.data)
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="App">
            <h3>Filter Component</h3>
            <div>
                <input
                    onChange={event => setSearchText(event.target.value)}
                    value={searchText}
                />
                <button onClick={searchProducts} >search</button>
            </div>
        </div>
    );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateProducts })(Filter);