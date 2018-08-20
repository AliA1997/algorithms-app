import React, { Component } from 'react';
//imoprt your components
import Login from '../../presentational/Login/Login';
import axios from 'axios';

export default class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    handleUsername = val => {
        this.setState({username: val});
    }
    handlePassword = val => {
        this.setState({password: val});
    }
    login = () => {
        console.log('Login');
    } 
    render() {
        return (<Login />);
    }
}