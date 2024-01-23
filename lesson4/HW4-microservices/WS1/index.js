const express = require('express');
const cors = require('cors');

const prod_ordersController = require('./controllers/prod_ordersController');

const app = express();
const PORT = 3001;

/* Middelwares */

app.use(express.json())

// Cors
app.use(cors())

/* Parse incoming request bodies in a middelware before the handlers, 
available under the req.body property */

app.use('/ws1/products', prod_ordersController)

app.listen(PORT, () => {
    console.log(`app is listening at http://localhost:${PORT}`);
})
