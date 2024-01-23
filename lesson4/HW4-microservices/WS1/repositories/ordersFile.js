const jf = require('jsonfile');

const FILE = './data/orders.json';
const readOrders = () => {
    return jf.readFile(FILE);
}

module.exports = readOrders;