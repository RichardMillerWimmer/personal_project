import { updateUser } from '../../redux/authReducer';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';;


function RegisterLogin(props) {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');


    function register() {
        axios.post('/api/auth/register', { email, firstName, lastName, password })
            .then(res => {
                const { firstName } = res.data

                // this.props.history.push()
                props.updateUser({ firstName })
            })
            .catch(err => console.log(err))
    }

    function login() {
        axios.post('/api/auth/login', { email, password })
            .then(res => {
                const { firstName } = res.data
                props.updateUser({ firstName })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="App">
            <h1>RegisterLogin Component</h1>
            <div>
                <h2>Register</h2>
                <p>email:</p>
                <input
                    onChange={event => setEmail(event.target.value)}
                    value={email} />
                <p>first name:</p>
                <input
                    onChange={event => setFirstName(event.target.value)}
                    value={firstName} />
                <p>last name:</p>
                <input
                    onChange={event => setLastName(event.target.value)}
                    value={lastName} />
                <p>password:</p>
                <input
                    onChange={event => setPassword(event.target.value)}
                    value={password} />
                <br></br>
                <button onClick={register}>Register</button>
            </div>
            <div>
                <h2>Login</h2>
                <p>email:</p>
                <input
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                />
                <p>password:</p>
                <input onChange={event => setPassword(event.target.value)}
                    value={password} />
                <br></br>
                <button onClick={login}>Login</button>
            </div>
        </div>
    );
}

export default connect(null, { updateUser })(RegisterLogin);