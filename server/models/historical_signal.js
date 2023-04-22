const { Schema, model } = require('mongoose');

const HistoricalSignalSchema = Schema({
    bot_id: {
        type: String,
        required: true
    },
    signal: {
        type: Number,
        required: true,
    },
    datetime: {
        type: Date,
        required: true,
    },
    processing_time: {
        type: Number,
        required: true,
    },
}, {collection: 'HISTORICAL_SIGNAL'});

module.exports = model('HISTORICAL_SIGNAL', HistoricalSignalSchema);
