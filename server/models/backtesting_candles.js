const { Schema, model } = require('mongoose');

const BacktestingCandlesSchema = Schema({
    timestamp: {
        type: Number,
        required: true
    },
    datetime: {
        type: Date,
        required: true
    },
    open: {
        type: Number,
        required: true
    },
    high: {
        type: Number,
        required: true
    },
    low: {
        type: Number,
        required: true
    },
    close: {
        type: Number,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    timeframe: {
        type: String,
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
}, {collection: 'backtesting_candles'});

module.exports = model('backtesting_candles', BacktestingCandlesSchema);
