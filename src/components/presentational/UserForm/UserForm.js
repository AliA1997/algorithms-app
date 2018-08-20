import React from 'react';
import uuid from 'uuid';
//import Suggestions Component.
import Suggestions from '../Suggestions/Suggestions';
//import data needed for the programming languages 
import programmingLanguages from '../../../data/programmingLanguages.json';
// import TiPlus from 'react-icons/lib/ti/plus';
import { withRouter } from 'react-router-dom';
//import decorator 
import decorator from './UserFormDecorator';
//import css file for styling
import './UserForm.css';

export const UserForm = (props) => {
    console.log(props.favorite_programming_languages);
    return (
        <div className='form container'>
            <div className='form-wrapper'>
                <h1 className='header'>Register</h1>
                <img src={props.profile_picture || `https://robohash.org/${uuid.v4()}`} value={props.profile_picture} />
                <div>
                    <label className='form-label'>Profile Picture</label>
                    <input type='file' onChange={props.upload} />
                </div>
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
                        <option defaultValue=''></option>
                        {props.edu.map((el, i) => <option key={i} value={el}>{el}</option>)}
                    </select>
                </div>
                <div>
                    <label className='form-label'>Favorite Programming Languages</label>
                    <input list='programming-languages' onChange={(e) =>  props.handleCurrentProgrammingLanguage(e.target.value)} 
                    value={props.currentProgrammingLanguage} />
                    <Suggestions suggestions={programmingLanguages} clickSuggestion={props.handleCurrentProgrammingLanguage}
                    suggestion={props.currentProgrammingLanguage} showSuggestion={props.currentProgrammingLanguage ? true : false}/>
                    <button className='add-button' onClick={props.addToFavProgrammingLanguages}>+</button>
                </div>
                <div className='favorite-programming-languages-div'>
                    {props.favorite_programming_languages.length ?
                     props.favorite_programming_languages.map((favLang, i) => { 
                     return <div className='programming-language-card' key={i} onClick={e => props.removeFromFavProgrammingLanguages(e, favLang.name.toLowerCase())}>
                                <p>{favLang.name}</p>
                                <img src={favLang.image} alt={favLang.name} />
                            </div>
                     }) : null}
                </div>
                <button className='btn' onClick={props.onClick}>Register</button>
            </div>
        </div>
    );
};


const UserFormDecorated = decorator(UserForm);
export default withRouter(UserFormDecorated);