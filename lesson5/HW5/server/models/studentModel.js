const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        Name: String,
        City: String,
        Faculty: String
    },
    {versionKey: false}
);

const Student = mongoose.model('student', studentSchema, 'student')
// A 'model' is a class with which we construct documents in a collection
// The first argument is the singular name of the collection that will be created for the model 
// (Mongoose will create the database collection for the above model 'student').
// The second argument is the schema to use in creating the model.
// The third argument is the name of the collection.


module.exports = Student;