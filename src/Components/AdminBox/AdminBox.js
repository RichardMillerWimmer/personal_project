import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import productsReducer, { updateProducts } from '../../redux/productsReducer';

function Admin(props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(null);
    const [imageOne, setImageOne] = useState('');
    const [imageTwo, setImageTwo] = useState('');
    const [imageThree, setImageThree] = useState('');
    const [downloadLink, setDownloadLink] = useState('');

    const [isEditing, setIsEditing] = useState(false);

    return (
        <div>
            <div>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <p>{product.image_one}</p>
                <p>{product.image_two}</p>
                <p>{product.downloadLink}</p>
                <button onClick={switchEditing}>edit</button>
            </div>
            <div>
                <p>name:</p>
                <input
                    onChange={event => setName(event.target.value)}
                    value={name || product.name} />
                <p>description:</p>
                <input
                    onChange={event => setDescription(event.target.value)}
                    value={product.description} />
                <p>price:</p>
                <input
                    onChange={event => setPrice(event.target.value)}
                    value={product.price} />
                <p>image one:</p>
                <input
                    onChange={event => setImageOne(event.target.value)}
                    value={product.image_one} />
                <p>image two:</p>
                <input
                    onChange={event => setImageTwo(event.target.value)}
                    value={product.image_two} />
                <p>download link:</p>
                <input
                    onChange={event => setDownloadLink(event.target.value)}
                    value={product.download} />
                <button onClick={() => editProduct(product.product_id)}>save</button>
                <button onClick={() => deleteProduct(product.product_id)}>delete</button>
            </div>
        </div>

    )

}
const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateProducts })(Admin);