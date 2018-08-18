//import mongoose to get our Schema in order to create our model.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

///Topic model is gonna have a name, 
const topic = Schema({
    name: {type: String, unique: true}, 
    tags: 
})


//Now export the created model.
module.exports = mongoose.model('Topic', topic);