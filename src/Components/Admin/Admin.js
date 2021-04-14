import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import productsReducer, { updateProducts } from '../../redux/productsReducer';
import AdminBox from '../AdminBox/AdminBox';



function Admin(props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(null);
    const [imageOne, setImageOne] = useState('');
    const [imageTwo, setImageTwo] = useState('');
    const [downloadLink, setDownloadLink] = useState('');


    useEffect(() => {
        getProducts()
    }, [])

    function getProducts() {
        // console.log('get products hit')
        axios.get('/api/product')
            .then(res => {
                console.log(res.data)
                props.updateProducts(res.data)
            })
            .catch(err => console.log(err))
    }

    function addProduct() {
        axios.post('/api/product', { name, description, price, imageOne, imageTwo, downloadLink })
            .then(res => {
                console.log(`Product: ${name} added.`)
                props.updateProducts(res.data)
                resetFields()
            })
            .catch(err => console.log(err))
    }

    function resetFields() {
        setName('')
        setDescription('')
        setPrice(null)
        setImageOne('')
        setImageTwo('')
        setDownloadLink('')
    }


    let mappedProducts = props.products.productList.map((product) => {
        console.log(product)
        return <div key={product.product_id}><AdminBox product={product}></AdminBox></div>
    })

    return (
        <div className="admin">
            <h1>Manage Available Packages</h1>
            <div className='box'>
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
                    onChange={event => setPrice(event.target.value)}
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
                <button onClick={addProduct}>add</button>

            </div>
            <div className='editDeleteList'>
                <h2>Edit Current Products</h2>
                {mappedProducts}
            </div>
        </div>
    );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateProducts })(Admin);