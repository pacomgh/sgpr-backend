const { Schema, model } = require('mongoose');

const KmeanModelSchema = Schema({
    trading_model: {
        type: Array,
        required: true
    },
    params: {
        type: Object,
        required: true
    },
}, {collection: 'KMEAN_MODEL'});

module.exports = model('KMEAN_MODEL', KmeanModelSchema);
