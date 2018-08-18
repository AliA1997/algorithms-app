import React from 'react';
import LoginPage from '../../container/LoginPage/LoginPage';

const Login = () => {
    return (
        <LoginPage>
            <div className='login-container'>
                <div className='login-wrapper'>
                    <label className='login-label'>Username</label>
                    <input type='text' onChange={props.onChange} value={props.username} className='login-input' />
                    <label className='login-label'>Password</label>
                    <input type='password' onChange={props.onChange2} value={props.password} className='login-input' />
                    <button className='login-btn'>Login</button>
                </div>
            </div>
        </LoginPage>    
    );
};

export default Login;