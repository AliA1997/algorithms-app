//import moongoose to define your schema which therefore defines your model.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define your problem model.
const problem = new Schema({
    issue: String,
    topic: {type: String, ref: 'Topic'},
    comments: [{id: String, username: String, body: String, likes: Number}]
});

//export the defined schema as the model.
module.exports = mongoose.model('Problem', problem);