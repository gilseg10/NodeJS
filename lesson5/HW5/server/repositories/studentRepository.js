const Student = require('../models/studentModel')

// get all students
const getAll = ()  => {
    return Student.find();
}

// get student by id

const getStudById = (id) => {
    return Student.findById(id);
}

module.exports = {
    getAll,
    getStudById
}