const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    color: String,
    price: Number
});

const Product = mongoose.model("product", productSchema, "products")

module.exports = Product;

