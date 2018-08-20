import React from 'react';
//import css file for styling 
import './Login.css';
import { Link } from 'react-router-dom';

export const Login = (props) => {
    return (
        <div className='login-container'>
            <div className='login-wrapper'>
                <h1 className='login header'>Login</h1>
                <label className='form-label'>Username</label>
                <input type='text' onChange={props.onChangeUsername} value={props.username} className='login-input' />
                <label className='form-label'>Password</label>
                <input type='password' onChange={props.onChangePassword} value={props.password} className='login-input' />
                <label className='form-label'>Don't have a Account?</label>
                <button className='btn'>Login</button>
            </div>
        </div>
    );
};


export default Login;