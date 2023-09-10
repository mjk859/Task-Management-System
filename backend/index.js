require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('../backend/models/user.model');

app.use(cors());
app.use(express.json()); //anything that comes as body into json

mongoose.connect(
  "mongodb+srv://admin-jaseel:VVzw3hMS0UMMsJRU@cluster0.o1fsbhk.mongodb.net/taskManagerDB"
);

// const taskSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   dueDate: String,
//   status: String,
//   assignedUser: String,
// });
// const Task = mongoose.model("Task", taskSchema);

app.post("/api/register", async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    res.json({status: 'success'});
  } catch (error) {
    res.json({status: 'error', error: 'Duplicate email address'});
  }
  
  
});

app.post("/api/login", async (req, res) => {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    })
    if(user) {
      res.json({status: 'success', user: true});
    } else {
      res.json({status: 'error', user : false});
    }
});

app.listen(1337, (req, res) => {
  console.log("listening on port 1337");
});
