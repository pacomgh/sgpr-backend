const BacktestingCandles = require('../models/backtesting_candles');

const getBacktestingCandles = async(req, res)=>{

    const backtesting_candles = await BacktestingCandles.find();

    res.json({
        ok:true,
        backtesting_candles
    });
}

const createBacktestingCandles = async (req, res)=>{

    const { 
        timestamp,
        datetime,
        open,
        high,
        low,
        close,
        symbol,
        timeframe,
        exchange_id,
        market_type,
    } = req.body;
    const backtesting_candles = new BacktestingCandles(req.body);

    await backtesting_candles.save();

    res.json({
        ok:true,
        backtesting_candles
    });
}

module.exports = {
    getBacktestingCandles,
    createBacktestingCandles
}