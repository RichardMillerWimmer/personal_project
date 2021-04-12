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
    const [imageThree, setImageThree] = useState('');
    const [downloadLink, setDownloadLink] = useState('');

    const [isEditing, setIsEditing] = useState(false);

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
        axios.post('/api/product', { name, description, price, imageOne, imageTwo, imageThree, downloadLink })
            .then(res => {
                console.log(`Product: ${name} added.`)
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
        setImageThree('')
        setDownloadLink('')
    }

    // function editProduct(product_id) {
    //     console.log(product_id)
    //     axios.put(`/api/product/${product_id}`, { name, description, price, imageOne, imageTwo, imageThree, downloadLink })
    //         .then(res => {
    //             console.log(`Product: ${name} edited.`)
    //         })
    //         .catch(err => console.log(err))
    // }

    // function deleteProduct(product_id) {
    //     console.log(product_id)
    //     axios.delete(`/api/product/${product_id}`)
    //         .then(res => {
    //             console.log('Product deleted.')
    //             getProducts()
    //         })
    //         .catch(err => console.log(err))
    // }




    // console.log(props)

    // let mappedProducts = props.products.productList.map((product) => {
    // console.log(product)
    //     return <div key={product.product_id}>
    //         {!isEditing ?
    //             <div>
    //                 <p>{product.name}</p>
    //                 <p>{product.description}</p>
    //                 <p>{product.price}</p>
    //                 <p>{product.image_one}</p>
    //                 <p>{product.image_two}</p>
    //                 <p>{product.downloadLink}</p>
    //                 <button onClick={switchEditing}>edit</button>
    //             </div>
    //             :
    //             <div>
    //                 <p>name:</p>
    //                 <input
    //                     onChange={event => setName(event.target.value)}
    //                     value={name || product.name} />
    //                 <p>description:</p>
    //                 <input
    //                     onChange={event => setDescription(event.target.value)}
    //                     value={product.description} />
    //                 <p>price:</p>
    //                 <input
    //                     onChange={event => setPrice(event.target.value)}
    //                     value={product.price} />
    //                 <p>image one:</p>
    //                 <input
    //                     onChange={event => setImageOne(event.target.value)}
    //                     value={product.image_one} />
    //                 <p>image two:</p>
    //                 <input
    //                     onChange={event => setImageTwo(event.target.value)}
    //                     value={product.image_two} />
    //                 <p>download link:</p>
    //                 <input
    //                     onChange={event => setDownloadLink(event.target.value)}
    //                     value={product.download} />
    //                 <button onClick={() => editProduct(product.product_id)}>save</button>
    //                 <button onClick={() => deleteProduct(product.product_id)}>delete</button>
    //             </div>}
    //     </div>
    // })

    let mappedProducts = props.products.productList.map((product) => {
        console.log(product)
        return <div key={product.product_id}><AdminBox product={product}></AdminBox></div>
    })

    return (
        <div className="Admin">
            <h1>Admin Component</h1>
            <div>
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
                <p>Image Three:</p>
                <input
                    onChange={event => setImageThree(event.target.value)}
                    value={imageThree}
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