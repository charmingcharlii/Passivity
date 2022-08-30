const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models/index');
const { Portfolio } = require("../models/portfolio");
const { signToken } = require("../utils/auth");
// will need to import auth and User model 


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                return User.findOne({_id: context.user._id})
            }
        }
    }, 

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return {token, user};

        }, 
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if(!user) {
                throw new AuthenticationError('No user with this login found.')
            }

            const passwordAuth = await user.checkPassword(password);

            if(!passwordAuth) {
                throw new AuthenticationError('Incorrect Password.')
            }

            const token = signToken(user);
            
            return {token, user};

        }, 
        saveHolding: async (parent, {ticker, holding, value}, context) => {

            //Don't know if this is explicitly necessary but it makes sure the user is authenticated.
            if(context.user) {

                const updatedPortfolio = Portfolio.findOneAndUpdate(
                    { userId: context.user_id },
                    {$push: {
                        stocks: {
                            ticker: ticker,
                            holding: holding,
                            value: value,
                        }
                    }},
                    {new: true}
                );
                
                return updatedPortfolio;

            }
            
            throw new AuthenticationError("Please log in first.");

        }
    }
};

module.exports = resolvers;