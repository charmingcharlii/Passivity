const { Schema, model } = require("mongoose");
const stockSchema = require("./Stock");

const portfolioSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
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