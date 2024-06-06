const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema(
    {
        StudentID: String,
        Profession: String,
        Score: String
    },
    {versionKey: false}
);

const Grade = mongoose.model('grade', gradeSchema, 'grade')
// A 'model' is a class with which we construct documents in a collection
// The first argument is the singular name of the collection that will be created for the model 
// (Mongoose will create the database collection for the above model 'grade').
// The second argument is the schema to use in creating the model.
// The third argument is the name of the collection.


module.exports = Grade;