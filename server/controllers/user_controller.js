//import bcryptjs to hash your password.
const bcrypt = require('bcryptjs');
//Define your saltRounds 
const saltRounds = 12;
//import User model for database operations.
const User = require('../models/user');
module.exports = {
    readUserData: (req, res) => {
        console.log('req.session.user-------', req.session.user);
        res.status(200).json({user: req.session.user});
    },
    logout: (req, res) => {
        //Destroy the session
        req.session.destroy();
    },
    login: (req, res) => {
        //Destruct the password and username from the request body
        const { username, password } = req.body;
        //Now find the user based on the username, then compare the password of the the found user with password from the req.body;
        User.findOne({username: username}).exec((err, userData) => {
            if(err) console.log('Login Database Error--------', err)
            // console.log('userData----------', userData);
            if(userData) {
                bcrypt.compare(password, userData.password).then(doPasswordsMatch => {
                    if(doPasswordsMatch) {
                        //Delete password 
                        delete userData.password;
                        // console.log('PasswordsMatch-----------', userData);
                        //Assign your session user to the userData 
                        req.session.user = userData;
                        //Save your session
                        req.session.save();
                        //Return your user to the frontend.
                        res.status(200).json({user: req.session.user, message: "Login Successfully!"});
                    } else {
                    res.status(404).json({message: 'Wrong Password!'});
                    }
                }).catch(err => console.log('Bcrypt comparing error---------', err));
            } else {
                res.status(200).json({message: 'Does not recognize username!'});
            }
        })
    },
    register: (req, res) => {
        const { username, name, password, profile_picture, email, phone_number, experience, recent_edu_completed, 
            favorite_programming_languages } = req.body;
        console.log(req.body);
        console.log('register------------');
        bcrypt.hash(password, saltRounds).then(hashedPassword => {

            const newUser = new User({
                username, 
                name, 
                password: hashedPassword, 
                profile_picture,
                email,
                phone_number: +phone_number,
                experience,
                recent_edu_completed,
                favorite_programming_languages
            });
            //Save the new User to the database.
            newUser.save();
            //After saving it delete it from database. 
            delete newUser.password;
            //Set the session to the user. 
            req.session.user = newUser;
            //Save the session to the session database.
            req.session.save();
            //Send back the session
            res.status(200).json({user: req.session.user, message: 'Successfully Registered!'});
        }).catch(err => console.log("Hashing Password Error----------", err));
    }
}