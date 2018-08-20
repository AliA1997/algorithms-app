require('dotenv').config();
const express = require('express');
//import your body parser to define your req.body.
const bodyParser = require('body-parser');
//import express-session to define your session.
const session = require('express-session');
//use mongo session for connecting mongodb to sessions
const MongoStore = require('connect-mongo')(session);
//import mongoose for connect to mongodb database.
const mongoose = require('mongoose');
///import the routes 
const userRoutes = require('./routes/user_routes');
const thirdPartyAPIRoutes = require('./routes/third_party_routes');
// const problemRoutes = require('./routes/problem_routes');

const PORT = 10000;

//Define your server by assign your app to a express instance 
const app = express();

//Connect your database. 
mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true}, (err) => {
    if(err) console.log('Database Connection Error------', err);
    console.log('Database Connected');
})
//Define your req.body middleware 
app.use(bodyParser.json());

//Define your session, and your store. 
app.use(session({
    //Define your mongooseConnection property set your mongoose.connection method so it connects to your database. 
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    secret: process.env.SESSION_SECRET,
    resave: false, 
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}))

//Use app.use to mount your routes 
app.use('/user', userRoutes);
app.use('/api', thirdPartyAPIRoutes);
// app.use(problemRoutes);

app.listen(PORT, () => console.log('Listening on Port 1200'))
