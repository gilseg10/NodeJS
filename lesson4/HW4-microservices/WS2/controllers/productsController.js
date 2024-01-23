const express = require('express')
const getMiniProducts = require ('../services/productsMini');

// Entry Point http://localhost:3000/ws2/products

const router = express.Router();

// Get All Cars
router.get('/', async (req, res) => {
    const products = await getMiniProducts();
    res.send(products) // option 1
    // res.json(products) // option 2
});

module.exports = router;