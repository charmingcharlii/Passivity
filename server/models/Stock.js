const { Schema, model } = require("mongoose");

const stockSchema = new Schema(
    {
        ticker: {
            type: String,
            required: true,
            unique: true
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