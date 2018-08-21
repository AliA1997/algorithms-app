import React, { Component } from 'react';
//imoprt your components
import Login from '../../presentational/Login/Login';
//import connect method from react-redux
import { connect } from 'react-redux';
// import login action from reducer
import { login } from '../../../redux/reducers/userReducer';
//import axios call for your backend.
import axios from 'axios';

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    handleUsername = username => {
        this.setState({username});
    }
    handlePassword = password => {
        this.setState({password});
    }
    login = () => {
        //Destruct username, and password 
        const { username, password } = this.state;
        //Dispatch action from props. 
        const attemptedLogin = {
            username, 
            password 
        }
        axios.post('/user/login', attemptedLogin).then(res => {
            alert(res.data.message);
        }).catch(err => console.log('Login Error---------', err));
    } 
    render() {
        return (<Login login={this.login} handleUsername={this.handleUsername} handlePassword={this.handlePassword}/>);
    }
}

const mapDispatchToProps = {
    loginUser: login
}

export default connect(null, mapDispatchToProps)(LoginPage);