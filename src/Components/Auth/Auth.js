import { updateUser } from '../../redux/authReducer';
import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';


function Auth(props) {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');


    function register() {
        axios.post('/api/auth/register', { email, firstName, lastName, password })
            .then(res => {
                const { first_name, id } = res.data

                props.updateUser({ first_name, id })
                props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    function login() {
        // console.log('hit login')
        // console.log(loginEmail)
        // console.log(loginPassword)
        axios.post('/api/auth/login', { loginEmail, loginPassword })
            .then(res => {
                // console.log(res.data)
                const { first_name, id, admin } = res.data

                props.updateUser({ first_name, id, admin })
                props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    const registerEnterPress = (event) => {
        if (event.keyCode === 13) {
            register()
        }
    }
    const loginEnterPress = (event) => {
        if (event.keyCode === 13) {
            login()
        }
    }

    return (
        <div className="authContainer">
            <form className='register box'>
                <h2>Register</h2>
                <p>email:</p>
                <input
                    onChange={event => setEmail(event.target.value)}
                    value={email} />
                <br></br>
                <p>first name:</p>
                <input
                    onChange={event => setFirstName(event.target.value)}
                    value={firstName} />
                <br></br>
                <p>last name:</p>
                <input
                    onChange={event => setLastName(event.target.value)}
                    value={lastName} />
                <br></br>
                <p>password:</p>
                <input
                    type='password'
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                    onKeyPress={registerEnterPress} />
                <br></br>
                <Button onClick={register} type='submit'>register</Button>
            </form>
            <form className='login box'>
                <h2>Login</h2>
                <p>email:</p>
                <input
                    onChange={event => setLoginEmail(event.target.value)}
                    value={loginEmail}
                />
                <br></br>
                <p>password:</p>
                <input
                    type='password'
                    onChange={event => setLoginPassword(event.target.value)}
                    value={loginPassword}
                    onKeyPress={loginEnterPress} />
                <br></br>
                <Button onClick={login} type='submit'>login</Button>
            </form>

        </div>
    );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateUser })(Auth);