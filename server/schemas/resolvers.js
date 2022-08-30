const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
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

            const passwordAuth = await user.isCorrectPassword(password);

            if(!passwordAuth) {
                throw new AuthenticationError('Incorrect Password.')
            }

            const token = signToken(user);
            
            return {token, user};

        }, 
        saveHolding: async (parent, {ticker, holding, value}) => {
            // honestly not super sure what we are trying to do here; assume this is pulling from the api? 
        }
    }
};

module.exports = resolvers;