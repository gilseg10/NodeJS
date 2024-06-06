const studRepo = require('../repositories/studentRepository');
const gradeRepo = require('../repositories/gradeRepository');

// get all students
const getAllStud = () => {
    return studRepo.getAll();
}

// get student by id
const getSingleStud = (id) => {
    return studRepo.getStudById(id);
}

// get all faculties
const getAllFaculties = async () => {
    const students = await studRepo.getAll();
    const faculties = students.map(stud => stud.Faculty);
    return faculties;
}

// get all student data + his grades
const getAllStudInfoGrades = async () => {
    const students = await studRepo.getAll();
    const grades = await gradeRepo.getAll();
    
    const studentsFullData = students.map(stud => {
        // data from MongoDB comesback with extra info in _doc array
        const stud_grades_doc = grades.filter(grade => grade.StudentID === stud._id.valueOf());
        // method 1 - return only essential (profession and score)
        // const only_stud_grades = stud_grades.map(grade => {
        //     return {"Profession": grade.Profession, "Score": grade.Score}
        // }) 
        // method 2 - remove _id and StudentID by using destructuring. The `({prop, ...rest}) => rest` 
        // is designed to remove single or multiple properties and assign new object (rest)
        const stud_grades = stud_grades_doc.map(grade => grade._doc);  
        const only_stud_grades = stud_grades.map(({_id, StudentID, ...grade}) => grade);
        
        return {
            ...stud._doc , // properties of the student
            "Grades": [...only_stud_grades] // array of objects that are the grades of that student
        }
        // return {
        //     "id": stud._id.valueOf(),
        //     "Name": stud.Name,
        //     "City": stud.City,
        //     "Faculty": stud.Faculty,
        //     "Grades": [...only_stud_grades] // array of objects that are grades of that student
        // }
    })
    return studentsFullData;
}

module.exports = {
    getAllStud,
    getSingleStud,
    getAllFaculties,
    getAllStudInfoGrades
}

