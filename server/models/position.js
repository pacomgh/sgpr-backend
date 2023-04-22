const { Schema, model } = require('mongoose');

const PositionSchema = Schema({
    position_id: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    datetime: {
        type: Date,
        required: true
    },
    exchange_id: {
        type: String,
        required: true
    },
    market_type: {
        type: String,
        required: true
    },
    price_open: {
        type: Number,
        required: true
    },
    side: {
        type: String,
        required: true
    },
    stop_loss: {
        type: Number,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    take_profit: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Number,
        required: true
    },
}, {collection: 'POSITION'});

module.exports = model('POSITION', PositionSchema);
