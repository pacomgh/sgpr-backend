const { Schema, model } = require('mongoose');

const OrderSchema = Schema({
    exchange_id: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    average: {
        type: Number,
        required: true
    },
    clientOrderId: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    datetime: {
        type: Date,
        required: true
    },
    fee: {
        type: Array,
        required: true
    },
    fees: {
        type: Array,
        required: true
    },
    filled: {
        type: Number,
        required: true
    },
    info: {
        type: Array,
        required: true
    },
    lastTradeTimestamp: {
        type: Date,
        required: true
    },
    local_params: {
        type: Array,
        required: true
    },
    n_trade: {
        type: Number,
        required: true
    },
    postOnly: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    reduceOnly: {
        type: Boolean,
        required: true
    },
    remaining: {
        type: Number,
        required: true
    },
    side: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    stopPrice: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    timeInForce: {
        type: String,
        required: true
    },
    timestamp: {
        type: Number,
        required: true
    },
    trades: {
        type: Array,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    updated: {
        type: Boolean,
        required: true
    },
}, {collection: 'ORDER'});

module.exports = model('ORDER', OrderSchema);
