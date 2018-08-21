import React from 'react';
//import css file for styling 
import './Login.css';
//import decorator from the LoginDecorator
import decorator from './LoginDecorator';
import { withRouter } from 'react-router-dom';

export const Login = (props) => {
    return (
        <div className='login-container'>
            <div className='login-wrapper'>
                <h1 className='login header'>Login</h1>
                <label className='form-label'>Username</label>
                <input type='text' onChange={props.handleChange1} value={props.username} className='login-input' />
                <label className='form-label'>Password</label>
                <input type='password' onChange={props.handleChange2} value={props.password} className='login-input' />
                <label className='form-label' onClick={props.onClick2}>Don't have a Account?</label>
                <button className='btn' onClick={props.onClick}>Login</button>
            </div>
        </div>
    );
};
const decoratedLogin = decorator(Login);
export default withRouter(decoratedLogin);