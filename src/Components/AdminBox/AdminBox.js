import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateProducts } from '../../redux/productsReducer';


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
    }, [])

    function captureCurrentProduct() {
        setName(props.product.name)
        setDescription(props.product.description)
        setPrice(props.product.price)
        setImageOne(props.product.image_one)
        setImageTwo(props.product.image_two)
        setDownloadLink(props.product.download_link)
    }


    function editProduct(product_id) {
        // console.log(product_id)
        axios.put(`/api/product/${product_id}`, { name, description, price, imageOne, imageTwo, downloadLink })
            .then(res => {
                props.updateProducts(res.data)
                // console.log(`Product: ${name} edited.`)
                switchEditing()
            })
            .catch(err => console.log(err))
    }

    function deleteProduct(product_id) {
        console.log(product_id)
        axios.delete(`/api/product/${product_id}`)
            .then(res => {
                props.updateProducts(res.data)

                console.log('Product deleted.')
            })
            .catch(err => console.log(err))
    }

    function cancelChanges() {
        setName(props.product.name)
        setDescription(props.product.description)
        setPrice(props.product.price)
        setImageOne(props.product.image_one)
        setImageTwo(props.product.image_two)
        setDownloadLink(props.product.download_link)
        setIsEditing(!isEditing)
    }

    function switchEditing() {
        // console.log(isEditing)
        setIsEditing(!isEditing)
    }

    return (
        <div className='box'>
            { !isEditing ?
                <div>
                    <p>{name}</p>
                    <p>{description}</p>
                    <p>{price}</p>
                    <p>{imageOne}</p>
                    <p>{imageTwo}</p>
                    <p>{downloadLink}</p>
                    <button onClick={switchEditing}>edit</button>
                </div>
                :
                <div>
                    <p>name:</p>
                    <input
                        onChange={event => setName(event.target.value)}
                        value={name} />
                    <p>description:</p>
                    <input
                        onChange={event => setDescription(event.target.value)}
                        value={description} />
                    <p>price:</p>
                    <input
                        onChange={event => setPrice(event.target.value)}
                        value={price} />
                    <p>image one:</p>
                    <input
                        onChange={event => setImageOne(event.target.value)}
                        value={imageOne} />
                    <p>image two:</p>
                    <input
                        onChange={event => setImageTwo(event.target.value)}
                        value={imageTwo} />
                    <p>download link:</p>
                    <input
                        onChange={event => setDownloadLink(event.target.value)}
                        value={downloadLink} />
                    <button onClick={() => editProduct(props.product.product_id)}>save</button>
                    <button className='deleteBtn' onClick={() => deleteProduct(props.product.product_id)}>delete</button>
                    <button onClick={() => cancelChanges()}>cancel</button>
                </div>}
        </div>

    )

}
const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateProducts })(Admin);