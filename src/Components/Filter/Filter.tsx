import { useState, KeyboardEvent } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateProducts } from '../../redux/productsReducer';
import Button from '../Button/Button'



function Filter(props: { updateProducts: (arg0: any) => void; }) {
    const [searchText, setSearchText] = useState<string>('');


    function searchProducts(): void {
        // console.log(searchText)
        axios.get(`/api/products?description=${searchText}`)
            .then(res => {
                props.updateProducts(res.data)
            })
            .catch(err => console.log(err))
    };

    function clearSearch(): void {
        axios.get('/api/products')
            .then(res => {
                // console.log(res.data)
                props.updateProducts(res.data)
                setSearchText('')
            })
            .catch(err => console.log(err))
    };

    const enterPress = (event: KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === '13') {
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

const mapStateToProps = (reduxState: any) => reduxState;

export default connect(mapStateToProps, { updateProducts })(Filter);