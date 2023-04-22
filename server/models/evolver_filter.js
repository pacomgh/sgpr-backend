const { Schema, model } = require('mongoose');

const EvolverFilterSchema = Schema({
    name: {
        type: String,
        required: true
    },
    values: {
        type: Array,
        required: true
    },
    
}, {collection: 'EVOLVER_FILTERS'});

module.exports = model('EVOLVER_FILTERS', EvolverFilterSchema);
