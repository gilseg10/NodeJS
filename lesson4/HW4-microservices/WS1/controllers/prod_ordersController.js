const express = require('express')
const createProductsOrders = require ('../services/ordersService');

// Entry Point http://localhost:3000/ws1/products

const router = express.Router();

// Get All Cars
router.get('/', async (req, res) => {
    const products = await createProductsOrders();
    res.send(products) // option 1
    // res.json(products) // option 2
});

module.exports = router;