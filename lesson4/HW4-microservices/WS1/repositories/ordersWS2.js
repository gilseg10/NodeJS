const axios = require('axios');

const URL = 'http://localhost:3000/ws2/products';

const getWS2Products = () => {
    return axios.get(URL)
}

module.exports = getWS2Products;