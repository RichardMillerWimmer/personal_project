import { getSuggestedQuery } from '@testing-library/dom';
import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { updateUser, logoutUser } from '../../redux/authReducer';
import { Link } from 'react-router-dom';




function Header(props) {

    // console.log(props)

    useEffect(() => {
        getUser()
    }, [])

    function getUser() {
        // console.log('getUser hit')
        axios.get('/api/auth/user')
            .then(res => {
                console.log(res.data)
                const { first_name, id } = res.data
                props.updateUser({ first_name, id })
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

    // console.log(props.auth)

    return (
        <div className="headerContainer">
            <Link to='/'><h4 className='logo' >LOGO</h4></Link>
            <div className='authBtn'>
                <Link to='/user'><button>{!props.auth.firstName ? '' : props.auth.firstName}</button></Link>
                <Link to='/cart'><button>cart</button></Link>
                {!props.auth.firstName ? <Link to='/auth'><button className='loginBtn'>register/login</button></Link> : <button className='logoutBtn' onClick={logoutUser}>logout</button>}
            </div>
        </div>
    );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateUser, logoutUser })(Header);