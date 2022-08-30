const { gql } = require("apollo-server-express");


//TODO: This is a WIP. Figure out final structure.
const typeDefs = gql`
    type Query {
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(username: String!, email: String!, password: String!): Auth
        saveHolding( holdingData: StockInput! ): Portfolio
    }

    type User {

        _id: ID!
        username: String!
        email: String!
        userPortfolio: Portfolio

    }

    type Portfolio {
        user: User
        stocks: [ Stocks ]
        totalInvestment: Int!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Stocks: {
        ticker: String!
        holding: Int!
        value: Int!
    }

    input StockInput {
        ticker: String!
        holding: Int!
        value: Int!
    }
`;

module.exports = typeDefs;