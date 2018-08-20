const express = require('express');
const Router = express.Router();
const cloudinaryCtrl = require('../controllers/cloudinary_controller');

Router.get('/upload', cloudinaryCtrl.upload);

module.exports = Router;