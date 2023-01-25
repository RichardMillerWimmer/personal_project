import axios from 'axios';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateProducts } from '../../redux/productsReducer';
import Button from '../Button/Button';
import Input from '../Input/Input'

function Admin(props: any) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageOne, setImageOne] = useState('');
    const [imageTwo, setImageTwo] = useState('');
    const [downloadLink, setDownloadLink] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        captureCurrentProduct()
    }, []);

    function captureCurrentProduct() {
        setName(props.name)
        setDescription(props.description)
        setPrice(props.price)
        setImageOne(props.image_one)
        setImageTwo(props.image_two)
        setDownloadLink(props.download_link)
    };


    function editProduct(product_id: number) {
        axios.put(`/api/products/${product_id}`, { name, description, price, imageOne, imageTwo, downloadLink })
            .then(res => {
                props.updateProducts(res.data)
                switchEditing()
            })
            .catch(err => console.log(err))
    };

    function deleteProduct(product_id: number) {
        axios.delete(`/api/products/${product_id}`)
            .then(res => {
                props.updateProducts(res.data)
            })
            .catch(err => console.log(err))
    };

    function cancelChanges() {
        setName(props.name)
        setDescription(props.description)
        setPrice(props.price)
        setImageOne(props.image_one)
        setImageTwo(props.image_two)
        setDownloadLink(props.download_link)
        setIsEditing(!isEditing)
    };

    function switchEditing() {
        setIsEditing(!isEditing)
    };

    return (
        <div className='adminBox'>
            {!isEditing ?
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
                    <Input
                        handler={setName}
                        value={name} />
                    <p>Description:</p>
                    <Input
                        handler={setDescription}
                        value={description} />
                    <p>Price:</p>
                    <Input
                        handler={setPrice}
                        value={price} />
                    <p>Image One:</p>
                    <Input
                        handler={setImageOne}
                        value={imageOne} />
                    <p>Image Two:</p>
                    <Input
                        handler={setImageTwo}
                        value={imageTwo} />
                    <p>Download Link:</p>
                    <Input
                        handler={setDownloadLink}
                        value={downloadLink} />
                    <Button onClick={() => editProduct(props.product.product_id)}>save</Button>
                    <Button className='deleteBtn' onClick={() => deleteProduct(props.product.product_id)}>delete</Button>
                    <Button onClick={() => cancelChanges()}>cancel</Button>
                </form>}
        </div>

    );

};
const mapStateToProps = (reduxState: any) => reduxState;

export default connect(mapStateToProps, { updateProducts })(Admin);