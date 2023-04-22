const Balance = require('../models/balance');

const getBalances = async(req, res)=>{

    const balances = await Balance.find();

    res.json({
        ok:true,
        balances
    });
}

const createBalance = async (req, res)=>{

    const { exchange_id, symbol, type, id, minNotional, precision } = req.body;
    const balance = new Balance(req.body);

    await balance.save();

    res.json({
        ok:true,
        balance
    });
}

module.exports = {
    getBalances,
    createBalance
}