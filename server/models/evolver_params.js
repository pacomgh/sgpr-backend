const { Schema, model } = require('mongoose');

const EvolverParamSchema = Schema({
    name: {
        type: String,
        required: true
    },
    values:{
        type: Array,
        required: true,
    },
}, {collection: 'EVOLVER_PARAMS'});

module.exports = model('EVOLVER_PARAMS', EvolverParamSchema);
