import { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateProducts } from '../../redux/productsReducer';
import Button from '../Button/Button'
import Input from '../Input/Input';

type TypeFromRedux = ReturnType<typeof mapStateToProps>

function Filter(props: TypeFromRedux) {
    const [searchText, setSearchText] = useState<string>('');

    function searchProducts(event: React.FormEvent) {
        event?.preventDefault()
        axios.get(`/api/products?description=${searchText}`)
            .then(res => {
                props.updateProducts(res.data)
            })
            .catch(err => console.log(err))
    };

    function clearSearch(): void {
        axios.get('/api/products')
            .then(res => {
                props.updateProducts(res.data)
                setSearchText('')
            })
            .catch(err => console.log(err))
    };

    return (
        <div className="filter">
            <form className='filter__form' onSubmit={searchProducts}>
                <Input placeholder='search products' value={searchText} type='text' label='Search Products' handler={setSearchText} />
                <Button type='submit'>search</Button>
                <Button onClick={clearSearch}>clear</Button>
            </form>
        </div>
    );
};

const mapStateToProps = (reduxState: any) => reduxState;

export default connect(mapStateToProps, { updateProducts })(Filter);