import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateProducts } from '../../redux/productsReducer';
import Button from '../Button/Button';

function Admin(props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(null);
    const [imageOne, setImageOne] = useState('');
    const [imageTwo, setImageTwo] = useState('');
    const [downloadLink, setDownloadLink] = useState('');

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // console.log('useEffect hit')
        captureCurrentProduct()
    }, []);

    function captureCurrentProduct() {
        setName(props.product.name)
        setDescription(props.product.description)
        setPrice(props.product.price)
        setImageOne(props.product.image_one)
        setImageTwo(props.product.image_two)
        setDownloadLink(props.product.download_link)
    };


    function editProduct(product_id) {
        // console.log(product_id)
        axios.put(`/api/products/${product_id}`, { name, description, price, imageOne, imageTwo, downloadLink })
            .then(res => {
                props.updateProducts(res.data)
                // console.log(`Product: ${name} edited.`)
                switchEditing()
            })
            .catch(err => console.log(err))
    };

    function deleteProduct(product_id) {
        // console.log(product_id)
        axios.delete(`/api/products/${product_id}`)
            .then(res => {
                props.updateProducts(res.data)

                // console.log('Product deleted.')
            })
            .catch(err => console.log(err))
    };

    function cancelChanges() {
        setName(props.product.name)
        setDescription(props.product.description)
        setPrice(props.product.price)
        setImageOne(props.product.image_one)
        setImageTwo(props.product.image_two)
        setDownloadLink(props.product.download_link)
        setIsEditing(!isEditing)
    };

    function switchEditing() {
        // console.log(isEditing)
        setIsEditing(!isEditing)
    };

    return (
        <div className='adminBox'>
            { !isEditing ?
                <div className='adminFlex'>
                    <div>
                        <img className='adminImg' src={imageOne} alt={name} />
                    </div>
                    <section>
                        <p>Name: {name}</p>
                        <p>Description: {description}</p>
                        <p>Price: {price}</p>
                        <p>Image One: {imageOne}</p>
                        <p>Image Two: {imageTwo}</p>
                        <p>Download Link: {downloadLink}</p>
                        <Button onClick={switchEditing}>edit</Button>
                    </section>
                </div>
                :
                <form>
                    <p>Name:</p>
                    <input
                        onChange={event => setName(event.target.value)}
                        value={name} />
                    <p>Description:</p>
                    <input
                        onChange={event => setDescription(event.target.value)}
                        value={description} />
                    <p>Price:</p>
                    <input
                        onChange={event => setPrice(event.target.value)}
                        value={price} />
                    <p>Image One:</p>
                    <input
                        onChange={event => setImageOne(event.target.value)}
                        value={imageOne} />
                    <p>Image Two:</p>
                    <input
                        onChange={event => setImageTwo(event.target.value)}
                        value={imageTwo} />
                    <p>Download Link:</p>
                    <input
                        onChange={event => setDownloadLink(event.target.value)}
                        value={downloadLink} />
                    <Button onClick={() => editProduct(props.product.product_id)}>save</Button>
                    <Button className='deleteBtn' onClick={() => deleteProduct(props.product.product_id)}>delete</Button>
                    <Button onClick={() => cancelChanges()}>cancel</Button>
                </form>}
        </div>

    );

};
const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateProducts })(Admin);