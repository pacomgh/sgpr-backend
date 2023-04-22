const { Schema, model } = require('mongoose');

const UtilsSchema = Schema({
    docname: {
        type: String,
        required: true
    },
    strategies_counter: {
        type: Number,
        required: true
    },
}, {collection: 'UTILS'});

module.exports = model('UTILS', UtilsSchema);
