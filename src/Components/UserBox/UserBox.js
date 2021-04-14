import axios from 'axios';
import React from 'react';



function UserBox(props) {

    console.log(props)

    // function downloadProduct() {
    //     axios.get(`/api/userproduct/download/${props.product.product_id}`)
    //         .then(res => {
    //             console.log(res.data)

    //         })
    // }

    return (
        <div className="userBox">
            <img src={props.product.image_one} />
            <div className='textBox'>
                <h2>{props.product.name}</h2>
                <p>{props.product.description}</p>
                <a href={props.product.download} download={props.product.name}><button>download</button></a>
            </div>
        </div >
    );
}

export default UserBox;