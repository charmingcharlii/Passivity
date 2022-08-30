const { Schema, model } = require("mongoose");
const userSchema = require("./User");

const portfolioSchema = new Schema(
    {
        user: {
            type: userSchema,
            required: true,
        },
        // stocks: {
        //     type: 
        // },
        totalInvestment: {
            type: Number,
            required: true
        }

    }
);

const Portfolio = model("Portfolio", portfolioSchema);

module.exports = Portfolio;