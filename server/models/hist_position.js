const { Schema, model } = require('mongoose');

const HistPositionSchema = Schema({
    position_id: {
        type: Number,
        required: true
    },
    exchange_id: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    market_type: {
        type: String,
        required: true
    },
    datetime_open: {
        type: Date,
        required: true
    },
    datetime_close: {
        type: Date,
        required: true
    },
    price_open: {
        type: Number,
        required: true
    },
    price_close: {
        type: Number,
        required: true
    },
    amount_open: {
        type: Number,
        required: true
    },
    amount_close: {
        type: Number,
        required: true
    },
    fee: {
        type: Number,
        required: true
    },
    trade_number: {
        type: Number,
        required: true
    },
    profit: {
        type: Number,
        required: true
    },
    net_profit: {
        type: Number,
        required: true
    },
    reported: {
        type: Boolean,
        required: true
    },
    side: {
        type: String,
        required: true
    },
    profit_currency: {
        type: String,
        required: true
    },
    price_unit: {
        type: String,
        required: true
    },
    contracts_open: {
        type: Number,
        required: true
    },
    contracts_close: {
        type: Number,
        required: true
    },
    percent_profit: {
        type: Number,
        required: true
    },
    portfolio_id: {
        type: Number,
        required: true
    },
}, {collection: 'HIST_POSITION'});

module.exports = model('HIST_POSITION', HistPositionSchema);
