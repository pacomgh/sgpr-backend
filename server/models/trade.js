const { Schema, model } = require('mongoose');

const TradeSchema = Schema({
    portfolio_name: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    n_trade: {
        type: Number,
        required: true
    },
    entry_datetime: {
        type: Date,
        required: true
    },
    entry_price: {
        type: Number,
        required: true
    },
    entry_amount: {
        type: Number,
        required: true
    },
    exit_datetime: {
        type: Date,
        required: true
    },
    exit_price: {
        type: Number,
        required: true
    },
    exit_amount: {
        type: Number,
        required: true
    },
    remaining: {
        type: Number,
        required: true
    },
    fee_open: {
        type: Number,
        required: true
    },
    fee_close: {
        type: Number,
        required: true
    },
    fee_currency: {
        type: String,
        required: true
    },
    side: {
        type: String,
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
    pnet_profit: {
        type: Number,
        required: true
    },
    portfolio_id: {
        type: Number,
        required: true
    },
    stop_loss: {
        type: Number,
        required: true
    },
    take_profit: {
        type: Number,
        required: true
    },
}, {collection: 'TRADE'});

module.exports = model('TRADE', TradeSchema);
