//Imports
const { AuthenticationError } = require('apollo-server-express');
const { User, Stocks } = require('../models/');
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {

        //Query a user's infomation.
        me: async (parent, args, context) => {
            if(context.user) {
                return User.findById(context.user._id).populate('userPortfolio')
            }
        }
    }, 

    Mutation: {

        //Used for adding a new user to the database.
        addUser: async (parent, args) => {
            const user = await User.create(args);

            const token = signToken(user);

            return {token, user};

        }, 

        //Used for logging in to an existing account.
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            //If the user DNE then throw an auth error.
            if(!user) {
                throw new AuthenticationError('No user with this login found.')
            }

            //Check the user's password against the encrypted password in DB.
            const passwordAuth = await user.checkPassword(password);

            //If the password check fails throw an error.
            if(!passwordAuth) {
                throw new AuthenticationError('Incorrect Password.')
            }
            
            //Sign a new JWT on login.
            const token = signToken(user);
            
            return {token, user};

        },

        //Used for updating an existing user's account information.
        updateUser: async (parent, {username, email}, context) => {
            
            if (context.user) {

                //Find a user by the id parameter passed in then update the necessary fields.
                const user = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { email: email, username: username },
                    { new: true }
                );

                return user;

            }

            //Throw an auth error if the user is not logged in.
            throw new AuthenticationError("You must be logged in.");

        },

        //Used for saving a row to the user's portfolio.
        saveHolding: async (parent, {holdingData}, context) => {


            if(context.user) {

                //Create a stock variable with the passed in parameters.
                const stock = ({
                            ticker: holdingData.ticker,
                            holding: holdingData.holding,
                            value: holdingData.value
                })

                //Update the user's portfolio array with the new data.
                const updatedPortfolio = User.findOneAndUpdate(
                    { _id: context.user._id },
                    {$push: {
                        userPortfolio: stock
                    }},
                    {new: true}
                );
                
                return updatedPortfolio;

            }
            
            throw new AuthenticationError("Please log in first.");

        },

        //Used for removing a row from the user's portfolio.
        removeHolding: async (parent, ticker, context) => {

            if(context.user) {

                //Find a stock using the passed in ticker parameter.
                const stock = await Stocks.findOne(
                    {ticker: ticker}
                )
                
                //Pop the stock with that ticker off the array.
                const updateUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pop: { userPortfolio: stock }},
                    { new: true }
                )

                return updateUser;

            }

            throw new AuthenticationError("Please log in first.");

        }

    }
};

module.exports = resolvers;