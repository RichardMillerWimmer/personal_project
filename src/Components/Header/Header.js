import { getSuggestedQuery } from '@testing-library/dom';
import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { updateUser, logoutUser } from '../../redux/authReducer';
import { Link } from 'react-router-dom';




function Header(props) {

    console.log(props)

    useEffect(() => {
        getUser()
    }, [])

    function getUser() {
        axios.get('/api/auth/user')
            .then(res => {
                // console.log(res.data)
                const { first_name } = res.data
                props.updateUser({ first_name })
            })
    }

    function logoutUser() {
        axios.delete('/api/auth/logout')
            .then(res => {
                props.logoutUser()
                props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    // console.log(props)

    return (
        <div className="headerContainer">
            <h4 className='logo' >LOGO</h4>
            <div className='authBtn'>
                {/* <h4>welcome,</h4> <h4>{!props.auth.firstName ? 'guest' : { props.auth.firstName }}</h4> */}
                {!props.auth.firstName ? <Link to='/auth'><button className='loginBtn'>register/login</button></Link> : <button className='logoutBtn' onClick={logoutUser}>logout</button>}
            </div>
        </div>
    );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateUser, logoutUser })(Header);