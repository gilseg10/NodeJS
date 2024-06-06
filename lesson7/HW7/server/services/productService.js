const productRepo = require('../repositories/productRepo');

// get all products
const getAllProducts = () => {
    return productRepo.getAll();
}

// get product by id
const getProductById = (args) => {
    const { id } = args;
    return productRepo.getProduct(id);
}

// add new product
const createNewProduct = (args) => {
    const { name, color, price } = args;
    return productRepo.createProduct(name, color, price);
}

// update product
const updateProduct = (args) => {
    const { id, name, color, price } = args;
    return productRepo.updateProduct(id, {name, color, price});
}

// delete product
const deleteProduct = (args) => {
    const { id } = args;
    return productRepo.deleteProduct(id);
}

// get all products above price
const getProductsAbovePrice = async (args) => {
    const { price } = args;
    const products = await productRepo.getAll();
    const filtered_products = products.filter(prod => prod.price >= price)
    return filtered_products;
}

// update only product price
const updateProductPrice = async (args) => {
    const { id, price } = args;
    const product = await productRepo.getProduct(id);
    const updated_product = {name: product.name, color: product.color, price: price};
    return productRepo.updateProduct(id, updated_product);  
}

// delete products with given color
// using map() instead of 'forEach() to create an array of promises 
// and then use Promise.all on this array
const deleteProdutcsWithColor = async (args) => {
    const { color } = args;
    const products = await productRepo.getAll();
    const delete_promises = products
        .filter(prod => prod.color === color)
        .map(prod => productRepo.deleteProduct(prod._id));
    const delete_color_products = Promise.all(delete_promises)
    return delete_color_products;
}

module.exports = {
    getAllProducts,
    getProductById,
    createNewProduct,
    updateProduct,
    deleteProduct,
    getProductsAbovePrice,
    updateProductPrice,
    deleteProdutcsWithColor
}