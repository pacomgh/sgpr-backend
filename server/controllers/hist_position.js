const HistPosition = require('../models/hist_position');

const getHistPositions = async(req, res)=>{

    const hist_positions = await HistPosition.find();

    res.json({
        ok:true,
        hist_positions
    });
}

const createHistPosition = async (req, res)=>{

    const { 
        position_id,
        exchange_id,
        symbol,
        market_type,
        datetime_open,
        datetime_close,
        price_open,
        price_close,
        amount_open,
        amount_close,
        fee,
        trade_number,
        profit,
        net_profit,
        reported,
        side,
        profit_currency,
        price_unit,
        contracts_open,
        contracts_close,
        percent_profit,
        portfolio_id,
    } = req.body;
    const hist_position = new HistPosition(req.body);

    await hist_position.save();

    res.json({
        ok:true,
        hist_position
    });
}

module.exports = {
    getHistPositions,
    createHistPosition
}