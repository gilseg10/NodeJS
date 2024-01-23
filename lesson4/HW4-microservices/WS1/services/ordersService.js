const readOrders = require('../repositories/ordersFile');
const getWS2Products = require('../repositories/ordersWS2');
const jf = require('jsonfile');

const createProductsOrders = async () => {
    const orders_data = await readOrders(); // json with "orders": [...]
    // console.log(orders_data);
    const { data: products } = await getWS2Products(); // array of jsons of ids and titles
    // console.log(products);
    const json_obj = {"products": []};


    
    products.forEach(product => {
        // const { amount, orderDate } = orders_data.orders.find(order => order.productid === product.id);
        const order_data = orders_data.orders.find(order => order.productid === product.id);
        if (order_data) {
            json_obj.products.push({
                "id": product.id,
                "title": product.title,
                "orders": {"amount": order_data.amount, "orderDate": order_data.orderDate}
            })
        } else {
            json_obj.products.push({
                "id": product.id,
                "title": product.title,
                "orders": {}
            });
        }
    });
    return json_obj;
}

module.exports = createProductsOrders;


