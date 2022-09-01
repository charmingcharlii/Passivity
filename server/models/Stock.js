const { Schema, model } = require("mongoose");

//This does not need to be a model because it's directly attached.
const stockSchema = new Schema(
    {
        ticker: {
            type: String,
            required: true
        },

        holding: {
            type: Number,
            required: true,
        },

        value: {
            type: Number,
            required: true
        }

    }
);

module.exports = stockSchema;