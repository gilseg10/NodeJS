const express = require('express');
const cors = require('cors');

const productsController = require('./controllers/productsController');

const app = express();
const PORT = 3000;

/* Middelwares */

app.use(express.json());

// Cors
app.use(cors());

/* Parse incoming request bodies in a middelware before the handlers, 
available under the req.body property */

app.use('/ws2/products', productsController);

app.listen(PORT, () => {
    console.log(`app is listening at http://localhost:${PORT}`);
})
