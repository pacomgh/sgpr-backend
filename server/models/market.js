const { Schema, model } = require('mongoose');

const MarketSchema = Schema({
    exchange_id: {
        type: String,
        required: true
    },
    symbol:{
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    minNotional: {
        type: String,
        required: true,
    },
    precision: {
        type: Array,
        required: false,
    }
}, {collection: 'MARKET'});

module.exports = model('MARKET', MarketSchema);
