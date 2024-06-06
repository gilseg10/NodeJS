const studentService = require('../services/studentService');
const express = require('express');

// Entry point of http://localhost:3000/student

const router = express.Router();

// Get all students
router.get('/', async (req, res) => {
    try {
        const students = await studentService.getAllStud();
        res.send(students);
    } catch (error) {
        res.send(error);
    }
})

// Get student by id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const student = await studentService.getSingleStud(id);
        res.send(student);
    } catch (error) {
        res.send(error);
    }
})

// Get all faculties
router.get('/category/faculty', async (req, res) => {
    try {
        const faculties = await studentService.getAllFaculties();
        res.send(faculties);
    } catch (error) {
        res.send(error);
    }
})

// Get all students with grades
router.get('/category/withgrades', async (req, res) => {
    try {
        const studswithgrades = await studentService.getAllStudInfoGrades();
        res.send(studswithgrades);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;
