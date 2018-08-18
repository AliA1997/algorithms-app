//import bcryptjs to hash your password.
const bcrypt = require('bcryptjs');
//Define your saltRounds 
const saltRounds = 12;
//import User model for database operations.
const User = require('../models/user');
module.exports = {
    readUserData: (req, res) => {
        res.status(200).json({user: req.session.user});
    },
    login: (req, res) => {
        //Destruct the password and username from the request body
        const { username, password } = req.body;
        //Now find the user based on the username, then compare the password of the the found user with password from the req.body;
        User.findOne({username: username}).exec((err, userData) => {
            if(err) console.log('Login Database Error--------', err)
            console.log('userData----------', userData);
            // bcrypt.compare(us)
        })
    },
    register: (req, res) => {
        const { username, name, password, email, phone_number, experience, recent_edu_completed } = req.body;
        console.log(req.body);
        console.log('register------------');
        bcrypt.hash(password, saltRounds).then(hashedPassword => {

            const newUser = new User({
                username, 
                name, 
                password: hashedPassword, 
                email,
                phone_number: +phone_number,
                experience,
                recent_edu_completed
            });
            //Save the new User to the database.
            newUser.save();
            //After saving it delete it from database. 
            delete newUser.passwordß;
            //Set the session to the user. 
            req.session.user = newUser;
            //Save the session to the session database.
            req.session.save();
            //Send back the session
            res.status(200).json({user: req.session.user, message: 'Successfully Registered!'});
        }).catch(err => console.log("Hashing Password Error----------", err));
    }
}