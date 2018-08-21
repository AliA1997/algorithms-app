const express = require('express');
const Router = express.Router();
const userCtrl = require('../controllers/user_controller');

Router.get('/user-data', userCtrl.readUserData);
Router.post('/register', userCtrl.register);
Router.post('/login', userCtrl.login);
Router.post('/logout', userCtrl.logout);

module.exports = Router;