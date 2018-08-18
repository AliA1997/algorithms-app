import React from 'react';
import { withRouter } from 'react-router-dom';
//import decorator 
import decorator from './UserFormDecorator';
//import css file for styling
import './UserForm.css';

const UserForm = (props) => {
    return (
        <div className='form container'>
            <div className='form-wrapper'>
                <h1 className='header'>Register</h1>
                <div>
                    <label className='form-label'>Username</label>
                    <input type='text' onChange={props.handleUsername} value={props.username} />
                </div>
                <div>
                    <label className='form-label'>Name</label>
                    <input type='text' onChange={props.handleName} value={props.name} />
                </div>
                <div>
                    <label className='form-label'>Email</label>
                    <input type='text' onChange={props.handleEmail} value={props.email} />
                </div>
                <div>
                    <label className='form-label'>Password</label>
                    <input type='password' onChange={props.handlePassword} value={props.password} />
                </div>
                <div>
                    <label className='form-label'>Programming Experience</label>
                    <input type='text' onChange={props.handleExperience} value={props.experience} />
                </div>
                <div>
                    <label className='form-label'>Phone Number</label>
                    <input type='number' onChange={props.handlePhoneNumber} value={props.phone_number} />
                </div>
                <div>
                    <label className='form-label'>Education Completed</label>
                    <select onChange={props.handleEdu} value={props.recent_edu_completed}>
                        <option value='' selected></option>
                        {props.edu.map((el, i) => <option key={i} value={el}>{el}</option>)}
                    </select>
                </div>
                <button className='btn' onClick={props.onClick}>Register</button>
            </div>
        </div>
    );
};


const UserFormDecorated = decorator(UserForm);
export default withRouter(UserFormDecorated);