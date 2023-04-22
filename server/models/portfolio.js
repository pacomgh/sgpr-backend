const { Schema, model } = require('mongoose');

const PortfolioSchema = Schema({
    name: {
        type: String,
        required: true
    },
    last_signal: {
        type: Number,
        required: true
    },
}, {collection: 'PORTFOLIO'});

module.exports = model('PORTFOLIO', PortfolioSchema);
