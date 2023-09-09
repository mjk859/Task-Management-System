require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
// const mongoose = require("mongoose");

app.use(cors());
app.use(express.json()); //anything that comes as body into json

// mongoose.connect(
//   "mongodb+srv://admin-jaseel:VVzw3hMS0UMMsJRU@cluster0.o1fsbhk.mongodb.net/taskManagerDB"
// );

// const userSchema = new mongoose.Schema(
//   {
//     username: String,
//     email: String,
//     password: String,
//   },
// );






// const User = mongoose.model("User", userSchema);


// const taskSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   dueDate: String,
//   status: String,
//   assignedUser: String,
// });
// const Task = mongoose.model("Task", taskSchema);

app.post("/api/register", (req, res) => {
  console.log(req.body);
  res.json({ status: 'Ok' });
});

app.listen(1337, (req, res) => {
  console.log("listening on port 1337");
});
