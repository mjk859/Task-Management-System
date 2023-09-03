const User = require('../index');
const jwt = require('jsonwebtoken');
const validator = require('email-validator');

const signin = (req, res) => {
    let { email, password } = req.body;
};

const register = async (req, res) => {
    const { email, password, username } = req.body;
    try {
        if(!username) return res.status(400).send("Username must be provided");
        if(!email) return res.status(400).send("Email must be provided");
        if(!validator.validate(email)) {
            return res.status(400).send("Invalid email");
        }
        if(!password || password.length < 6){
            return res.status(400).send("Password must be at least 6 characters");
        }
        const userExist = await User.findOne({ email });
        if(userExist){
            return res.status(400).send("User already exists");
        }
        const user = await new User({
            email, password, username
        });
        await user.save();
        return res.status(200).send("User successfully created");
    } catch (error) {
        return res.status(400).send("Error creating user: " + error.message);
    }
};