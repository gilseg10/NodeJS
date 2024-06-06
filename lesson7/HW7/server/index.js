const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db');

// mount a GraphQL API server on the 'http://localhost:4000/graphql' endpoint:
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// student service
const productService = require('./services/productService')

// construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type Product {
        id: ID!
        name: String
        color: String
        price: Int
    }

    input ProductInput {
        id: ID!
        name: String
        color: String
        price: Int
    }

    type Query {
        getAllProducts: [Product]
        getProduct (id: ID): Product
        getAllProductsExpensive (price: Int): [Product]
    }

    type Mutation {
        createProduct (name: String, color: String, price: Int): Product
        updateProduct (id: ID!, name: String, color: String, price: Int): Product
        deleteProduct (id: ID!): Product
        updateProductPrice (id: ID!, price: Int): Product
        deleteProductsColor (color: String!): [Product] 
    }
`)

const root = {
    getAllProducts: productService.getAllProducts,
    getProduct: productService.getProductById,
    getAllProductsExpensive: productService.getProductsAbovePrice,
    createProduct: productService.createNewProduct,
    updateProduct: productService.updateProduct,
    deleteProduct: productService.deleteProduct,
    updateProductPrice: productService.updateProductPrice,
    deleteProductsColor: productService.deleteProdutcsWithColor
};

const app = express();
const PORT = 4000;

connectDB();

/* Middelwares */
app.use(express.json())

// CORS
app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true
    })
);

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
});