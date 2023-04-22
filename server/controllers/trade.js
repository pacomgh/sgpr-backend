const Trade = require('../models/trade');

const getTrades = async(req, res)=>{

    const trades = await Trade.find();

    res.json({
        ok:true,
        trades
    });
}

const createTrade = async (req, res)=>{

    const { 
        portfolio_name,
        symbol,
        n_trade,
        entry_datetime,
        entry_price,
        entry_amount,
        exit_datetime,
        exit_price,
        exit_amount,
        remaining,
        fee_open,
        fee_close,
        fee_currency,
        side,
        profit,
        net_profit,
        pnet_profit,
        portfolio_id,
        stop_loss,
        take_profit,
    } = req.body;
    const trade = new Trade(req.body);

    await trade.save();

    res.json({
        ok:true,
        trade
    });
}

module.exports = {
    getTrades,
    createTrade
}