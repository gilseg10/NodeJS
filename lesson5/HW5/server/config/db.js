const mongoose = require('mongoose');

const connectDB = () => {
    // connect to Mongo DB
    mongoose
    .connect('mongodb://127.0.0.1:27017/studentDB')
    .then(() => console.log("Connected To studentDB"))
    .catch((error) => console.log(error)); 
};

module.exports = connectDB;