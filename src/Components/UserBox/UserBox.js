import axios from 'axios';
import React from 'react';



function UserBox(props) {

    console.log(props)

    function downloadProduct() {
        axios.get(`/api/userproduct/download/${props.product.product_id}`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="userBox">
            <img src={props.product.image_one} />
            <div className='textBox'>
                <h2>{props.product.name}</h2>
                <p>{props.product.description}</p>
                <button onClick={downloadProduct}>download</button>
                {/* <a href={props.product.download_link} download={props.product.name} target='_blank'><button>download</button></a> */}
            </div>
        </div >
    );
}

export default UserBox;