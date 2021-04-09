import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';



function Admin(props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(null);
    const [imageOne, setImageOne] = useState('');
    const [imageTwo, setImageTwo] = useState('');
    const [imageThree, setImageThree] = useState('');
    const [downloadLink, setDownloadLink] = useState('');


    function addProduct() {
        axios.post('/api/admin/product', { name, description, price, imageOne, imageTwo, imageThree, downloadLink })
            .then(res => {
                console.log(`Product: ${name} added.`)
                resetFields()
            })
            .catch(err => console.log(err))
    }

    function editProduct() {
        axios.put(`/api/admin/product/${props.product_id}`, { name, description, price, imageOne, imageTwo, imageThree, downloadLink })
            .then(res => {
                console.log(`Product: ${name} edited.`)
                resetFields()
            })
            .catch(err => console.log(err))
    }

    function deleteProduct() {
        axios.delete(`/api/product/${props.product_id}`)
            .then(res => {
                console.log('Product deleted.')
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
                <button onClick={editProduct}>edit</button>
            </div>
        </div>
    );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(Admin);