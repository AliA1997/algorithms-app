import React, { Component } from 'react';
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
        return (
            <div>
                LoginPage
            </div>
        );
    }
}