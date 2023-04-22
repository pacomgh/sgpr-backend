const Position = require('../models/position');

const getPositions = async(req, res)=>{

    const posotions = await Position.find();

    res.json({
        ok:true,
        posotions
    });
}

const createPosition = async (req, res)=>{

    const { 
        position_id,
        amount,
        datetime,
        exchange_id,
        market_type,
        price_open,
        side,
        stop_loss,
        symbol,
        take_profit,
        timestamp, 
    } = req.body;
    const position = new Position(req.body);

    await position.save();

    res.json({
        ok:true,
        position
    });
}

module.exports = {
    getPositions,
    createPosition
}