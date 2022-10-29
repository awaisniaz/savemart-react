import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
function Signup() {
    return (
        <div className='login-container'>
            <div className='login'>
                <div className='inner-container'>
                    <h3 className='headings'>SIGN UP</h3>
                    <input className='user-input' type="text" autoComplete='false' placeholder='Enter your Name'></input>

                    <input className='user-input' type="text" autoComplete='false' placeholder='Enter your Email'></input>
                    <input className='user-input' type="password" placeholder='Enter Your Password'></input>
                    <span><input type='checkbox' id='privacy-policy'></input><label htmlFor='privacy-policy'>Agree on term and privacy policy</label></span>
                    <button className='login-btn'>REGISTER</button>
                    <Link className='go-to-signup' to='/login'>LOGIN</Link>
                </div>
            </div>

        </div>
    )
}

export default Signup
