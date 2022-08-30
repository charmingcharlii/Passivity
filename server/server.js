const express = require("express");
const path = require("path");
// const { ApolloSever } = require('apollo-server-express')
// const { authMiddleware } = require('./utils/auth')

// const { typeDefs, resolvers } = require('./schemas')
const db = require("./config/connection.js");

const PORT = process.env.PORT || 3001;

const app = express();
// const server = new ApolloSever({
//     typeDefs,
//     resolvers,
//     constext: authMiddleware
// })

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}


    db.once("open", () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
        })
    });



