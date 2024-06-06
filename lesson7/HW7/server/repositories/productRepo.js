const Product = require('../models/productModel');

// get all products
const getAll = () => {
    return Product.find();
}

// get product
const getProduct = (id) => {
    return Product.findById(id)
}

// create product
const createProduct = async (name, color, price) => {
    const product = new Product({name, color, price});
    await product.save();
    return product;
}

// update product 
const updateProduct = async (id, product) => {
    await Product.findByIdAndUpdate(id, product);
    const product_new = await getProduct(id);
    return product_new; 
}

// delete product
const deleteProduct = async (id) => {
    const delete_product = await getProduct(id);
    await Product.findByIdAndDelete(id);
    return delete_product;
}

module.exports = {
    getAll,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}