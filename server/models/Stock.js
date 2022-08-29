const { Schema, model } = require('mongoose');

const stockSchema = new Schema({
    ticker: {
        type: String,
        required: true,
    },
    units: {
        type: Number,
        required: true
    },
    priceAvg: {
        type: Number,
        required: true
    }
});

const Stock = model('Stock', stockSchema)

module.exports = Stock