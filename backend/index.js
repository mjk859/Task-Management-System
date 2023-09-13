require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("../backend/models/user.model");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json()); // Anything that comes as the body is parsed into JSON.

mongoose.connect(
  "mongodb+srv://admin-jaseel:VVzw3hMS0UMMsJRU@cluster0.o1fsbhk.mongodb.net/taskManagerDB"
);

app.post("/api/register", async (req, res) => {
  try {
    console.log("Registering user:", req.body);
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    console.log("User registration successful");
    res.json({ status: "success" });
  } catch (error) {
    console.error("Error during user registration:", error);
    res.json({ status: "error", error: "Duplicate email address" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    console.log("Logging in user:", req.body);
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
        }, 'secret123'
      )
      console.log("User login successful");
      return res.json({ status: "success", user: token });
    } else {
      console.log("User login failed");
      res.json({ status: "error", user: false });
    }
  } catch (error) {
    console.error("Error during user login:", error);
    res.status(500).json({ status: "error", error: "Server error" });
  }
});

app.listen(1337, (req, res) => {
  console.log("Server is listening on port 1337");
});
