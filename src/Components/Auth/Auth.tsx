import { updateUser, User } from '../../redux/authReducer';
import axios from 'axios';
import { useState } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { ReduxState } from '../../redux/store';


function Auth(props: { updateUser: ({ firstName, userId, admin }: User) => void; history: string[]; }) {
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
        axios.post('/api/auth/login', { loginEmail, loginPassword })
            .then(res => {
                const { firstName, userId, admin } = res.data

                props.updateUser({ firstName, userId, admin })
                props.history.push('/')
            })
            .catch(err => console.log(err, err.message))
    };

    return (
        <main>
            <div className="authContainer">
                <form className='register box'>
                    <h2>Register</h2>
                    <Input value={email} label='email' handler={setEmail} />
                    <br></br>
                    <Input value={firstName} label='firstName' handler={setFirstName} />
                    <br></br>
                    <Input value={lastName} label='lastName' handler={setLastName} />
                    <br></br>
                    <Input value={password} label='password' handler={setPassword} type='password' />
                    <br></br>
                    <Button onClick={register} type='submit'>register</Button>
                </form>
                <form className='login box'>
                    <h2>Login</h2>
                    <Input value={loginEmail} label='loginEmail' text='email' handler={setLoginEmail} />
                    <br></br>
                    <Input value={loginPassword} label={'loginPassword'} text='password' handler={setLoginPassword} type='password' />
                    <br></br>
                    <Button onClick={login} type='submit'>login</Button>
                </form>

            </div>
        </main>

    );
};

const mapStateToProps = (reduxState: ReduxState) => reduxState;

export default connect(mapStateToProps, { updateUser })(Auth);