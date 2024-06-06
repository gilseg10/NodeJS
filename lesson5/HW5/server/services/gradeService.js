const gradeRep = require('../repositories/gradeRepository');

// Get All Grades
const getAllGrades = () => {
    return gradeRep.getAll();
}

// Get All Grades according to profession
const getProfessionGrades = async (profession) => {
    const grades = await gradeRep.getAll();
    const prof_grades = grades.filter(grade => grade.Profession === profession);
    return prof_grades;
}

module.exports = {
    getAllGrades,
    getProfessionGrades
}