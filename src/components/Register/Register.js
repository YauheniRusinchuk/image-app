import React, {useState} from 'react'
import './register.scss'

function Register() {

    const [email, setEmail] = useState('');
    const [pswd, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        if(pswd !== confirm) {
            console.log('bad password confirm')
        }else if(email == '') {
            console.log('email required')
        }else{
            console.log(email, pswd)
        }
    }



    return (
        <div className='register-container'>
            <div className='register-wrapper'>
                <p>REGISTER</p>
                <form className='register-form' onSubmit={handleSubmit}>
                    <span>Your email</span>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type='email'
                        placeholder="Email ..." />
                    <span>Your password</span>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={pswd}
                        type='password'
                        placeholder="Password ..." />
                    <span>Confirm password</span>
                    <input
                        onChange={(e) => setConfirm(e.target.value)}
                        value={confirm}
                        type='password'
                        placeholder="Confirm password ..." />
                    <button>REGISTER</button>
                </form>
            </div>
        </div>
    )
}


export default Register;
