const User = require('../index');
const jwt = require('jsonwebtoken');
const validator = require('email-validator');
const { response } = require('express');

const login = async(req, res) => {
    let { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send("User not found");
        }

        user.comparePassword(password, (err, match) => {
            if(!match || err) {
                return res.status(400).send("Password does not match");
            }
            let token = jwt.sign({ _id: user._id }, 'qwertyuiop', { expiresIn: '24h'});
            res.status(200).send({

                token,
                username: user.username,
                email: user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            });
        });
    } catch (error) {
        return response.status(400).send('login failed: ');
    }
};

const register = async (req, res) => {
    console.log(req.body, 'request');
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

module.exports = {
    login,
    register,
};