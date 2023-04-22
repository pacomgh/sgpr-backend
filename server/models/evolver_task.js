const { Schema, model } = require('mongoose');

const EvolverTaskSchema = Schema({
    blackbox: {
        type: String,
        required: true
    },
    timeframe: {
        type: String,
        required: true,
    },
    exchange: {
        type: String,
        required: true,
    },
    market_type: {
        type: String,
        required: true,
    },
    symbol: {
        type: String,
        required: true,
    },
    period: {
        type: Array,
        required: true,
    },
    train_test_prop: {
        type: Number,
        required: true,
    },
    parameters: {
        type: String,
        required: true,
    },
    filter: {
        type: Array,
        required: true,
    },
    running: {
        type: Boolean,
        required: true,
    },
}, {collection: 'EVOLVER_TASK'});

module.exports = model('EVOLVER_TASK', EvolverTaskSchema);
