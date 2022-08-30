const { Schema, model } = require("mongoose");
const userSchema = require("./User");
const stockSchema = require("./Stock");

const portfolioSchema = new Schema(
    {
        user: {
            type: userSchema,
            required: true,
        },

        stocks: [stockSchema],

        totalInvestment: {
            type: Number,
            required: true
        }

    }
);

const Portfolio = model("Portfolio", portfolioSchema);

module.exports = Portfolio;