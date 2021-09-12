import React from 'react';
import Button from '../Button/Button';



function UserBox(props) {

    // console.log(props)

    // function downloadProduct() {
    //     axios.get(`/api/userproduct/download/${props.product.product_id}`)
    //         .then(res => {
    //             console.log(res.data)
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        <div className="userBox">
            <img src={props.product.image_one} alt={props.product.name} />
            <div className='textBox'>
                <h2>{props.product.name}</h2>
                <p>{props.product.description}</p>
                {/* <Button onClick={downloadProduct}>download</Button> */}
                <a href={props.product.image_one} download={props.product.name} target='_blank' rel="noreferrer"><Button>download</Button></a>
            </div>
        </div >
    );
};

export default UserBox;