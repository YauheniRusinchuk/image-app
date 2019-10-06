import React, {useState} from 'react'
import './login.scss'


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleSubmit(e){
        e.preventDefault();
        if(email && password) {
            console.log(email, password)
        }
    }


    return (
        <div className='login-container'>
            <div className='login-wrapper'>
                <p>LOGIN</p>
                <form className='form-login' onSubmit={handleSubmit}>
                    <span>Your email</span>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type='email'
                        placeholder="Email ..." />
                    <span>Your password</span>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type='password'
                        placeholder="Password ..." />
                    <button>LOGIN</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
