//import cloudinary to sign request 
const cloudinary = require('cloudinary');
module.exports = {
    upload: (req, res) => {
        //Define your api secret and timestamp
        const timestamp = Math.round(new Date().getTime() / 1000);
        const api_secret = process.env.CLOUDINARY_API_SECRET;
        //Thn define your signature 
        const signature = cloudinary.utils.api_sign_request({timestamp}, api_secret);
        //then define your payload
        const payload = {
            timestamp,
            signature
        };
        //Then payload to frontend
        res.status(200).json({payload});
    }
}