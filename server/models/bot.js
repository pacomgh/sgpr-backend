const { Schema, model } = require('mongoose');

const BotSchema = Schema({
    account: {
        type: String,
        required: true
    },
    apiKey:{
        type: String,
        required: true,
    },
    datetime: {
        type: Date,
        required: true,
    },
    exchange: {
        type: String,
        required: true,
    },
    exchange_credentials: {
        type: Array,
        required: true,
    },
    exit_on_signal: {
        type: Boolean,
        required: true,
    },
    go_long: {
        type: Boolean,
        required: true,
    },
    go_short: {
        type: Boolean,
        required: true,
    },
    ignore_last_candle: {
        type: Boolean,
        required: true,
    },
    initial_balance: {
        type: Number,
        required: true,
    },
    initial_entry_allocation: {
        type: Number,
        required: true,
    },
    last_signal: {
        type: Number,
        required: true,
    },
    market_type: {
        type: String,
        required: true,
    },
    master: {
        type: String,
        required: true,
    },
    next_run: {
        type: Date,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    portfolio_id: {
        type: String,
        required: true,
    },
    reinvest_profits: {
        type: Boolean,
        required: true,
    },
    running: {
        type: Boolean,
        required: true,
    },
    secret: {
        type: Boolean,
        required: true,
    },
    server: {
        type: Boolean,
        required: true,
    },
    signal_distance: {
        type: Number,
        required: true,
    },
    stop_loss_value: {
        type: Number,
        required: true,
    },
    strat_params: {
        type: Array,
        required: true,
    },
}, {collection: 'BOT'});

module.exports = model('BOT', BotSchema);
