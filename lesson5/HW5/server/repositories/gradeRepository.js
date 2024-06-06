const Grade = require('../models/gradeModel');

// get all grades
const getAll = () => {
    return Grade.find();
}

module.exports = {
    getAll
}