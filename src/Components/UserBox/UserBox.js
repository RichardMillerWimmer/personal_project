import axios from 'axios';
import React from 'react';
import Button from '../Button/Button';



function UserBox(props) {

    // console.log(props)

    function downloadProduct() {
        axios.get(`/api/userproduct/download/${props.product.product_id}`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="userBox">
            <img src={props.product.image_one} alt={props.product.name} />
            <div className='textBox'>
                <h2>{props.product.name}</h2>
                <p>{props.product.description}</p>
                <Button onClick={downloadProduct}>download</Button>
                {/* <a href={props.product.download_link} download={props.product.name} target='_blank'><button>download</button></a> */}
            </div>
        </div >
    );
}

export default UserBox;