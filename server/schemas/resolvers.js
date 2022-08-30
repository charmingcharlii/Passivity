const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
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
        addUser: async (parent, {name, email, password}) => {
            const user = await User.create({ name, email, password })
            // will need a variable that brings in the token from auth

            // returning token and user 
        }, 
        login: async (parent, { username, email, password }) => {
            const user = await User.findOne({ username, email });

            if(!user) {
                throw new AuthenticationError('No user with this login found.')
            }

            const passwordAuth = await user.isCorrectPassword(password);

            if(!passwordAuth) {
                throw new AuthenticationError('Incorrect Password.')
            }

            // will need variable for token 

            // returning token and user 
        }, 
        saveHolding: async (parent, {ticker, holding, value}) => {
            // honestly not super sure what we are trying to do here; assume this is pulling from the api? 
        }
    }
};

module.exports = resolvers;