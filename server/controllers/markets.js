const Market = require('../models/market');

const getMarkets = async(req, res)=>{

    const markets = await Market.find();

    res.json({
        ok:true,
        markets
    });
}

const createMarket = async (req, res)=>{

    const { 
        exchange_id,
        symbol,
        type,
        id,
        minNotional,
        precision, } = req.body;
    const market = new Market(req.body);

    await market.save();

    res.json({
        ok:true,
        market
    });
}

module.exports = {
    getMarkets,
    createMarket
}