const { Schema, model } = require("mongoose");
const stockSchema = require("./Stock");

const portfolioSchema = new Schema(
    {
        stocks: [stockSchema],

        totalInvestment: {
            type: Number,
            required: true,
            default: 0
        }

    }
);

const Portfolio = model("Portfolio", portfolioSchema);

module.exports = Portfolio;