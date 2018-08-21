//import react since your are using react router dom
import React from 'react';
//import route and switch component from react-router dom.
import { Route, Switch } from 'react-router-dom';
//import your components
import Home from './components/container/Home/Home';
import LoginPage from './components/container/LoginPage/LoginPage';
import RegisterPage from './components/container/RegisterPage/RegisterPage';
import BlogPage from './components/container/BlogPage/BlogPage';
import Dashboard from './components/container/Dashboard/Dashboard';
import TopicsPage from './components/container/TopicsPage/TopicsPage';

export default <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/topics' component={TopicsPage} />
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route exact path='/blog' component={BlogPage} />
                    <Route path='/register' component={RegisterPage} />
                    <Route path='/login' component={LoginPage} />
                </Switch>