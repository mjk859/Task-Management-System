const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require('bcryptjs');
const cors = require('cors');
const authRoutes = require('../backend/routes/authRoutes');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());
app.use('auth', authRoutes);

mongoose.connect(
  "mongodb+srv://admin-jaseel:VVzw3hMS0UMMsJRU@cluster0.o1fsbhk.mongodb.net/taskManagerDB"
);

const userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

userSchema.pre('save', function (next) {
    let user = this
    if(user.isModified('password')){
        return bcrypt.hash(user.password, 12, function (err, hash){
            if(err){
                return next(err);
            }
            user.password = hash;
            return next();
        })
    
    } else {
        return next();
    }
});

userSchema.methods.comparePassword = function (password, next) {
    bcrypt.compare(password, this.password, function (err, match) {
        if(err){
            return next(err, false);
        }
        return(null, match);
    })
};

const User = mongoose.model("User", userSchema);
module.exports = User;

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  dueDate: String,
  status: String,
  assignedUser: String,
});
const Task = mongoose.model("Task", taskSchema);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/register", (req, res) => {
  res.send("register page");
});

app.listen(port, (req, res) => {
  console.log("listening on port", port);
});
