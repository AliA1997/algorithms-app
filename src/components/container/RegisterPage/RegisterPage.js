import React, { Component } from 'react';
import UserForm from '../../presentational/UserForm/UserForm';
//import data needed for the programming languages 
import programmingLanguages from '../../../data/programmingLanguages.json';
//import axios to register user.
import axios from 'axios';
// import connect to connect component to react-redux
import { connect } from 'react-redux';
// import your login action responsible to logging in your user to redux state.
import { login } from '../../../redux/reducers/userReducer';


class RegisterPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            name: '',
            password: '',
            phone_number: '',
            profile_picture: '',
            experience: '',
            recent_edu_completed: '',
            favorite_programming_languages: [],
            currentProgrammingLanguage: ''
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
    handleUpload = (file) => {
        //Get your cloudinary signature from your endpoint. 
        return axios.get('/api/upload').then(res => {
            const formData = new FormData();
            formData.append("signature", res.data.payload.signature);
            formData.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);
            formData.append("timestamp", res.data.payload.timestamp);
            formData.append("file", file);
            //Post it in your cloudinary database 
            axios.post(process.env.REACT_APP_CLOUDINARY_URL, formData).then(res2 => {
                this.setState({profile_picture: res2.data.secure_url});
            }).catch(err => console.log('Create and insert into Cloudinary Database--------', err));
        }).catch(err => console.log('Get Credentials Error--------', err));
    }
    handleCurrentProgrammingLanguage = currentProgrammingLanguage => {
        this.setState({currentProgrammingLanguage});
    }
    addToFavProgrammingLanguages = () => {
        const { favorite_programming_languages } = this.state;
        //copy the array since you want to treat the data as immutable.
        const copyOfArr = favorite_programming_languages.slice();
        let languageSelected = programmingLanguages.filter(pgLang => pgLang.name.toLowerCase() === this.state.currentProgrammingLanguage.toLowerCase())[0];
        copyOfArr.push(languageSelected);
        this.setState({favorite_programming_languages: copyOfArr, currentProgrammingLanguage: ''});
    }
    removeFromFavProgrammingLanguages = (valueToRemove) => {
        const { favorite_programming_languages } = this.state;
        if(valueToRemove) {
            //copy the array since you want to treat the data as immutable.
            const copyOfArr = favorite_programming_languages.slice();
            //get the index and splice from the array
            const indexToRemove = copyOfArr.findIndex(pgLang => pgLang === valueToRemove);
            copyOfArr.splice(indexToRemove, 1);
            this.setState({favorite_programming_languages: copyOfArr});
        } else {
            return;
        }
    }
    register = () => {
        //Destruct the needed values from state
        const { username, name, email, password, profile_picture, phone_number, experience, recent_edu_completed,
             favorite_programming_languages } = this.state;
        //Dispatch teh login action from the props passed in by mapDispatchToProps
        const { login } = this.props;
        //Define your newUser
        const newUser = { username, name, email, password, profile_picture, phone_number, experience, recent_edu_completed,
            favorite_programming_languages };
        axios.post('/user/register', newUser)
        .then(res => {
            login(res.data.user);
            console.log(res.data.user);
            alert(res.data.message);
        }).catch(err => console.log('Register User Error----------', err));
    }
    render() {
        return (
            <UserForm handleUsername={this.handleUsername} handleEmail={this.handleEmail} handleName={this.handleName} handleUpload={this.handleUpload}
                handlePassword={this.handlePassword} register={this.register} edu={this.edu} {...this.state} pgLang={programmingLanguages}
                handlePhoneNumber={this.handlePhoneNumber} handleExperience={this.handleExperience} handleEdu={this.handleEdu} 
                handleCurrentProgrammingLanguage={this.handleCurrentProgrammingLanguage} addToFavProgrammingLanguages={this.addToFavProgrammingLanguages}
                removeFromFavProgrammingLanguages={this.removeFromFavProgrammingLanguages}/>
        );
    }
}

//Now map dispatcher to props.
const mapDispatchToProps = {
    login
}

export default connect(null, mapDispatchToProps)(RegisterPage);
