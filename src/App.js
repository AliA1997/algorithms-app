import React, { Component } from 'react';
//import the Navbar component 
import Navbar from './components/presentational/Navbar/Navbar';
//import connect to connect your component to redux.
import { connect } from 'react-redux';
import { login, logout } from './redux/reducers/userReducer';
//import withRouter when dealing with HOC's
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import routes from './routes';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }
  componentDidMount() {
    axios.get('/user/user-data').then(res => {
      console.log(res.data.user);
      if(!res.data.user) {
        this.props.logout();
      } 
      this.props.login(res.data.user);
    }).catch(err => console.log("Get user Session Error--------", err));
  }
  logout = () => {
    axios.post('/user/logout', {}).then(res => {
      alert(res.data.message);
      this.props.logout();
    }).catch(err => console.log('Logout Error---------', err));
  }
  linkFunc = (path) => {
    console.log('Link func hit-------');
    this.props.history.push(path);
  }
  openMenu = (e) => {
    e.preventDefault();
    this.setState({open: !this.state.open});
  }
  render() {
    const { user } = this.props;
    return (
      <div className="App">
        <Navbar linkFunc={this.linkFunc} open={this.state.open} openMenu={this.openMenu} user={user.user}/>
        {routes}
      </div>
    );
  }
}

const mapDispatchToProps = {
  login, 
  logout
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
