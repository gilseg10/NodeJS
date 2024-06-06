const gradeService = require('../services/gradeService');
const express = require('express');

// Entry point of http://localhost:3000/grade

const router = express.Router();

// Get all grades
router.get('/', async (req,res) => {
    try {
        const grades = await gradeService.getAllGrades();
        res.send(grades);
    } catch (error) {
        res.send(error);
    }
})

// Get all grades with specific profession
router.get('/:profession', async (req,res) => {
    try {
        const { profession } = req.params;
        const profession_grades = await gradeService.getProfessionGrades(profession);
        res.send(profession_grades);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;

