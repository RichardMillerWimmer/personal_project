import axios from 'axios';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { updateUser, logoutUser, User } from '../../redux/authReducer';
import { resetProducts } from '../../redux/userProductsReducer';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
// import logo from '../../images/Polymath_Logo_White.png';
import logo from '../../images/3d-house-svgrepo-com.svg';
import styled from '@emotion/styled';
import { Cart } from '../../redux/cartReducer';


type HeaderProps = {
    auth: User;
    cart: Cart;
}
type TypeFromRedux = ReturnType<typeof mapStateToProps>

type Type = HeaderProps & TypeFromRedux

function Header(props: Type) {

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

    function getUser(): void {
        axios.get('/api/auth/user')
            .then(res => {
                const { firstName, userId, admin } = res.data
                props.updateUser({ firstName, userId, admin })
            })
            .catch(err => console.log(err))
    };

    function logoutUser(): void {
        axios.delete('/api/auth/logout')
            .then(() => {
                props.logoutUser()
                props.resetProducts()
            })
            .catch(err => console.log(err))
    };

    return (
        <nav className="header">
            <Link to='/'><Logo className='header__logo' alt='House 3D Logo' src={logo} ></Logo></Link>
            <div className='header__buttons'>
                {!props.auth.firstName ? <Link to='/auth'><Button className='header__button-login'>register/login</Button></Link> : ''}
                {props.auth.admin === true ? <Link to='/admin'><Button>manage</Button></Link> : ''}
                {props.auth.firstName ? <div>
                    {props.auth.firstName && !props.auth.admin ? <Link to='/user'><Button className='header__button-user' >{props.auth.firstName}</Button></Link> : ''}
                    {props.auth.firstName && !props.auth.admin ? <Link to='/cart'><Button className='header__button-cart'>cart:{props.cart.items.length}</Button></Link> : ''}
                    {props.auth.firstName ? <Link to='/'><Button className='header__button-logout' onClick={logoutUser}>logout</Button> </Link> : ''}
                </div> : ''}
            </div>
        </nav>
    );
};

const mapStateToProps = (reduxState: any) => reduxState;

export default connect(mapStateToProps, { updateUser, logoutUser, resetProducts })(Header);
