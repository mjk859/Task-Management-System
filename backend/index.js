const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3001

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://admin-jaseel:VVzw3hMS0UMMsJRU@cluster0.o1fsbhk.mongodb.net/taskManagerDB');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});
const User = mongoose.model('User', userSchema);

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    dueDate: String,
    status: String,
    assignedUser: String
});
const Task = mongoose.model('Task', taskSchema);

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.get('/register', (req, res) => {
    res.send('register page');
});

app.listen(port, (req, res) => {
    console.log("listening on port", port);
});