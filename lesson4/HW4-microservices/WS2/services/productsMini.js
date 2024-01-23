const getProducts = require('../repositories/products');

const getMiniProducts = async () => {
    const { data: products } = await getProducts();
    return products.map(product => {
        return {"id": product.id, "title": product.title}
    });
}

module.exports = getMiniProducts;