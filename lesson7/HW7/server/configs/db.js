const mongoose = require('mongoose');

const connectDB = () => {
    mongoose
    .connect('mongodb://127.0.0.1:27017/HW7')
    .then(() => console.log("Connected to HW7 DB"))
    .catch((error) => console.log(error))
}

module.exports = connectDB;