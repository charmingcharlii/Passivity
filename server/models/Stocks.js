const { Schema, model } = require("mongoose");

const stockSchema = new Schema(
    {
        ticker: {
            type: String,
            required: true,
            unique: true
        },

        holding: {
            
        }
    }
);

const Stocks = model("Stocks", stockSchema);

module.exports = Stocks;