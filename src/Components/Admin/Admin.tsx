import axios from 'axios';
import { useState, useEffect, Key } from 'react';
import { connect } from 'react-redux';
import { Product, updateProducts } from '../../redux/productsReducer';
import AdminBox from '../AdminBox/AdminBox';
import Button from '../Button/Button';

type AdminProps = {
    products: Product[];
}

type TypeFromRedux = ReturnType<typeof mapStateToProps>

type Type = AdminProps & TypeFromRedux

function Admin(props: Type) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
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
                console.log(res.data)
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
        setPrice(0)
        setImageOne('')
        setImageTwo('')
        setDownloadLink('')
    };


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
                <input
                    onChange={event => setName(event.target.value)}
                    value={name}
                />
                <p>Description:</p>
                <input
                    onChange={event => setDescription(event.target.value)}
                    value={description}
                />
                <p>Price:</p>
                <input
                    onChange={event => setPrice(+event.target.value)}
                    value={price}
                />
                <p>Image One:</p>
                <input
                    onChange={event => setImageOne(event.target.value)}
                    value={imageOne}
                />
                <p>Image Two:</p>
                <input
                    onChange={event => setImageTwo(event.target.value)}
                    value={imageTwo}
                />
                <p>Download Link:</p>
                <input
                    onChange={event => setDownloadLink(event.target.value)}
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

const mapStateToProps = (reduxState: any) => reduxState;

export default connect(mapStateToProps, { updateProducts })(Admin);