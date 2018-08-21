//import mongoose to get our Schema in order to create our model.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

///Topic model is gonna have a name, 
const topic = new Schema({
    name: {type: String, unique: true}, 
    image: String,
    category: String
})


//Now export the created model.
module.exports = mongoose.model('Topic', topic);