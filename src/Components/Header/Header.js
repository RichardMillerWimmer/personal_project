import { getSuggestedQuery } from '@testing-library/dom';
import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { updateUser, logoutUser } from '../../redux/authReducer';



function Header(props) {

    useEffect(() => {
        getUser()
    }, [])

    function getUser() {
        axios.get('/api/auth/user')
            .then(res => {
                const { firstName } = res.data
                props.updateUser({ firstName })
            })
    }



    return (
        <div className="App">
            <h1>Header Component</h1>
            <h4>{props.firstName}</h4>
        </div>
    );
}

export default Header;