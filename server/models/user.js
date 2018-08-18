//import mongoose to define a model.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define your user schema.
const user = new Schema({
    name: String,
    username: {type: String, unique: true},
    password: String,
    email: {type: String, unique: true, lowercase: true},
    phone_number: Number,
    experience:  String,
    recent_edu_completed: String
});

//Export the schema and define the model.
module.exports = mongoose.model('User', user);