const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db')

const studentsController = require('./controllers/studentController');
const gradesController = require('./controllers/gradeController');

const app = express();
const PORT = 3000;

connectDB();

/* Middelwares */

app.use(express.json())

// Cors
app.use(cors())

/* Parse incoming request bodies in a middelware before the handlers, 
available under the req.body property */

app.use('/student', studentsController)
app.use('/grade', gradesController)

app.listen(PORT, () => {
    console.log(`app is listening at http://localhost:${PORT}`);
})
