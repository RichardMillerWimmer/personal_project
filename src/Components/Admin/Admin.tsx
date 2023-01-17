import axios from 'axios';
import { useState, useEffect, Key } from 'react';
import { connect } from 'react-redux';
import { Product, updateProducts } from '../../redux/productsReducer';
import { ReduxState } from '../../redux/store';
import AdminBox from '../AdminBox/AdminBox';
import Button from '../Button/Button';
import Input from '../Input/Input';

type AdminProps = {
    products: Product[];
    updateProducts: (products: Product[]) => void;
}

type TypeFromRedux = ReturnType<typeof mapStateToProps>

type Type = AdminProps & TypeFromRedux

function Admin(props: Type) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageOne, setImageOne] = useState('');
    const [imageTwo, setImageTwo] = useState('');
    const [downloadLink, setDownloadLink] = useState('');


    useEffect(() => {
        getProducts()
    }, []);

    function getProducts() {
        // console.log('get products hit')
        axios.get('/api/products')
            .then(res => {
                // console.log(res.data)
                props.updateProducts(res.data)
            })
            .catch(err => console.log(err))
    };

    function addProduct() {
        axios.post('/api/products', { name, description, price, imageOne, imageTwo, downloadLink })
            .then(res => {
                // console.log(`Product: ${name} added.`)
                props.updateProducts(res.data)
                resetFields()
            })
            .catch(err => console.log(err))
    };

    function resetFields() {
        setName('')
        setDescription('')
        setPrice('')
        setImageOne('')
        setImageTwo('')
        setDownloadLink('')
    };

    // @ts-ignore
    let mappedProducts = props.products.productList.map((product: Product) => {
        // console.log(product)
        return <div key={product.product_id as Key}><AdminBox {...product}></AdminBox></div>
    });

    return (
        <div className="admin">
            <h1>Manage Available Packages</h1>
            <h2>Add A New Product</h2>
            <form className='addBox'>
                <p>Name:</p>
                <Input
                    handler={setName}
                    value={name}
                />
                <p>Description:</p>
                <Input
                    handler={setDescription}
                    value={description}
                />
                <p>Price:</p>
                <Input
                    handler={setPrice}
                    value={price}
                />
                <p>Image One:</p>
                <Input
                    handler={setImageOne}
                    value={imageOne}
                />
                <p>Image Two:</p>
                <Input
                    handler={setImageTwo}
                    value={imageTwo}
                />
                <p>Download Link:</p>
                <Input
                    handler={setDownloadLink}
                    value={downloadLink}
                />
                <br></br>
                <Button onClick={addProduct}>add</Button>

            </form>
            <div className='editDeleteList'>
                <h2>Edit Current Products</h2>
                {mappedProducts}
            </div>
        </div>
    );
};

const mapStateToProps = (reduxState: ReduxState) => reduxState;

export default connect(mapStateToProps, { updateProducts })(Admin);