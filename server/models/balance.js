const { Schema, model } = require('mongoose');

const BalanceSchema = Schema({
    coin: {
        type: String,
        required: true
    },
    availableForWithdrawal: {
        type: String,
        require: true
    },
    availableWithoutBorrow: {
        type: String,
        require: true
    },
    exchange: {
        type: String,
        require: true
    },
    free: {
        type: String,
        require: true
    },
    spotBorrow: {
        type: String,
        require: true
    },
    total: {
        type: String,
        require: true
    },
    usdValue: {
        type: String,
        require: true
    }


}, {collection: 'BALANCE'});

module.exports = model('Balance', BalanceSchema);