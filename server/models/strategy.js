const { Schema, model } = require('mongoose');

const StrategySchema = Schema({
    name: {
        type: String,
        required: true
    },
    metaname:{
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
    },
    symbol: {
        type: String,
        required: true,
    },
    blackbox: {
        type: String,
        required: true,
    },
    timeframe: {
        type: String,
        required: true,
    },
    fitness: {
        type: Number,
        required: true,
    },
    params: {
        type: Array,
        required: true,
    },
    creation_date: {
        type: Date,
        required: true,
    },
    training_period: {
        type: Array,
        required: true,
    },
    security: {
        type: Array,
        required: true,
    },
    cluster: {
        type: Number,
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
}, {collection: 'STRATEGY'});

module.exports = model('STRATEGY', StrategySchema);
