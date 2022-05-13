import { updateUser } from '../../redux/authReducer';
import axios from 'axios';
import { useState, KeyboardEvent } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';


function Auth(props: { updateUser: (arg0: { firstName: any; userId: any; admin?: any; }) => void; history: string[]; }) {
    const [email, setEmail] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loginEmail, setLoginEmail] = useState<string>('');
    const [loginPassword, setLoginPassword] = useState<string>('');


    function register(): void {
        axios.post('/api/auth/register', { email, firstName, lastName, password })
            .then(res => {
                const { firstName, userId } = res.data

                props.updateUser({ firstName, userId })
                props.history.push('/')
            })
            .catch(err => console.log(err))
    };

    function login(): void {
        // console.log('hit login')
        // console.log(loginEmail)
        // console.log(loginPassword)
        axios.post('/api/auth/login', { loginEmail, loginPassword })
            .then(res => {
                console.log(res.data)
                const { firstName, userId, admin } = res.data

                props.updateUser({ firstName, userId, admin })
                props.history.push('/')
            })
            .catch(err => console.log(err, err.message))
    };

    const registerEnterPress = (event: KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === '13') {
            register()
        }
    };
    const loginEnterPress = (event: KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === '13') {
            login()
        }
    };

    return (
        <div className="authContainer">
            <form className='register box'>
                <h2>Register</h2>
                <label htmlFor='email'>email:</label>
                <input
                    id='email'
                    onChange={event => setEmail(event.target.value)}
                    value={email} />
                <br></br>
                <label htmlFor='firstName'>first name:</label>
                <input
                    id='firstName'
                    onChange={event => setFirstName(event.target.value)}
                    value={firstName} />
                <br></br>
                <label htmlFor='lastName'>last name:</label>
                <input
                    id='lastName'
                    onChange={event => setLastName(event.target.value)}
                    value={lastName} />
                <br></br>
                <label htmlFor='password'>password:</label>
                <input
                    id='password'
                    type='password'
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                    onKeyPress={registerEnterPress} />
                <br></br>
                <Button onClick={register} type='submit'>register</Button>
            </form>
            <form className='login box'>
                <h2>Login</h2>
                <label htmlFor='loginEmail'>email:</label>
                <input
                    id='loginEmail'
                    onChange={event => setLoginEmail(event.target.value)}
                    value={loginEmail}
                />
                <br></br>
                <label htmlFor='loginPassword'>password:</label>
                <input
                    id='loginPassword'
                    type='password'
                    onChange={event => setLoginPassword(event.target.value)}
                    value={loginPassword}
                    onKeyPress={loginEnterPress} />
                <br></br>
                <Button onClick={login} type='submit'>login</Button>
            </form>

        </div>
    );
};

const mapStateToProps = (reduxState: any) => reduxState;

export default connect(mapStateToProps, { updateUser })(Auth);