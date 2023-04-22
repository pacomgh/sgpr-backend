const Strategy = require('../models/strategy');

const getStrategies = async(req, res)=>{

    const strategies = await Strategy.find();

    res.json({
        ok:true,
        strategies
    });
}

const createStrategy = async (req, res)=>{

    const {
        name,
        metaname,
        user,
        active,
        symbol,
        blackbox,
        timeframe,
        fitness,
        params,
        creation_date,
        training_period,
        security,
        cluster,
        exchange,
        market_type, } = req.body;
    const strategy = new Strategy(req.body);

    await strategy.save();

    res.json({
        ok:true,
        strategy
    });
}

module.exports = {
    getStrategies,
    createStrategy
}