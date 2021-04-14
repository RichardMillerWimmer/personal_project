import React from 'react';



function UserBox(props) {

    // console.log(props)

    return (
        <div className="userBox">
            <img src={props.product.image_one} />
            <div className='textBox'>
                <h2>{props.product.name}</h2>
                <p>{props.product.description}</p>
                <button>download</button>
            </div>
        </div >
    );
}

export default UserBox;