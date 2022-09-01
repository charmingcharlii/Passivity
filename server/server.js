const dotenv = require('dotenv')
dotenv.config()

//Server Imports
const express = require("express");
const path = require("path");
const { ApolloServer } = require('apollo-server-express')
const { authMiddleware } = require('./utils/auth')
const { typeDefs, resolvers } = require('./schemas')
const db = require("./config/connection.js");

//Choose the PORT the server will listen on.
const PORT = process.env.PORT || 3001;

const app = express();

//Apollo Server configuration.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

//Start the apollo server and once the database is operational start the node server.
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({app});

    db.once("open", () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`GraphQL available at: http://localhost:${PORT}${server.graphqlPath}`);
        })
    });
    
}

startApolloServer();