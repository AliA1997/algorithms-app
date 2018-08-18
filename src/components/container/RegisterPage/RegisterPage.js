import React, { Component } from 'react';
import UserForm from '../../presentational/UserForm/UserForm';
//import axios to register user.
import axios from 'axios';
//import connect to connect component to react-redux
// import { connect } from 'react-redux';
//import your login action responsible to logging in your user to redux state.
// import { login } from '../../../redux/reducers/userReducer';


class RegisterPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            name: '',
            password: '',
            phone_number: '',
            experience: '',
            recent_edu_completed: ''
        }
        this.edu = [
            'Some High School',
            'High School or GED',
            'Some College',
            'AS',
            'BS',
            'MS',
            'PHD'
        ]
    }
    handleUsername = (username) => {
        console.log(username);
        this.setState({username});
    }
    handleName = (name) => {
        this.setState({name});
    }
    handleEmail = (email) => {
        this.setState({email});
    }
    handlePassword = (password) => {
        this.setState({password});
    }
    handlePhoneNumber = (phone_number) => {
        this.setState({phone_number});
    }
    handleExperience = (experience) => {
        this.setState({experience});
    }
    handleEdu = (recent_edu_completed) => {
        this.setState({recent_edu_completed});
    }
    register = () => {
        //Dispatch teh login action from the props passed in by mapDispatchToProps
        // const { login } = this.props;
        axios.post('/user/register', {...this.state})
        .then(res => {
            // login(res.data.user);
            console.log(res.data.user);
            alert(res.data.message);
        }).catch(err => console.log('Register User Error----------', err));
    }
    render() {
        return (
            <UserForm handleUsername={this.handleUsername} handleEmail={this.handleEmail} handleName={this.handleName} 
                handlePassword={this.handlePassword} register={this.register} edu={this.edu} {...this.state}
                handlePhoneNumber={this.handlePhoneNumber} handleExperience={this.handleExperience} handleEdu={this.handleEdu} />
        );
    }
}

//Now map dispatcher to props.
// const mapDispatchToProps = {
//     login
// }

// export default connect(mapDispatchToProps)(RegisterPage);
export default RegisterPage;