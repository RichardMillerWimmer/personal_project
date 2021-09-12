import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { updateUser, logoutUser } from '../../redux/authReducer';
import { resetProducts } from '../../redux/userProductsReducer';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import logo from '../../images/Polymath_Logo_White.png';
import styled from '@emotion/styled';



function Header(props) {

    // console.log(props)

    const Logo = styled.img`
        height: 80px;
        margin-left: 10px;
        margin-top: 7px;
        transition: .4s;
        &:hover {
            -webkit-transform: scale(1.05);
            -ms-transform: scale(1.05);
            transform: scale(1.05);
        }
    `;

    useEffect(() => {
        getUser()
    }, []);

    function getUser() {
        // console.log('getUser hit')
        axios.get('/api/auth/user')
            .then(res => {
                // console.log(res.data)
                const { first_name, id, admin } = res.data
                props.updateUser({ first_name, id, admin })
            })
            .catch(err => console.log(err))
    };

    function logoutUser() {
        axios.delete('/api/auth/logout')
            .then(res => {
                props.logoutUser()
                props.resetProducts()
            })
            .catch(err => console.log(err))
    };

    return (
        <div className="headerContainer">
            <Link to='/'><Logo className='logo' src={logo} ></Logo></Link>
            <div className='userBtns'>
                {!props.auth.firstName ? <Link to='/auth'><Button className='loginBtn'>register/login</Button></Link> : ''}
                {props.auth.admin === true ? <Link to='/admin'><Button>manage</Button></Link> : ''}
                {props.auth.firstName ? <div>
                    {props.auth.firstName && !props.auth.admin ? <Link to='/user'><Button className='userBtn' >{props.auth.firstName}</Button></Link> : ''}
                    {props.auth.firstName && !props.auth.admin ? <Link to='/cart'><Button className='cartBtn'>cart:{props.cart.items.length}</Button></Link> : ''}
                    {props.auth.firstName ? <Link to='/'><Button className='logoutBtn' onClick={logoutUser}>logout</Button> </Link> : ''}
                </div> : ''}
            </div>
        </div>
    );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateUser, logoutUser, resetProducts })(Header);