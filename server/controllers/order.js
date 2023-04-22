const Order = require('../models/order');

const getOrders = async(req, res)=>{

    const order = await Order.find();

    res.json({
        ok:true,
        order
    });
}

const createOrder = async (req, res)=>{

    const { 
        exchange_id,
        id,
        amount,
        average,
        clientOrderId,
        cost,
        datetime,
        fee,
        fees,
        filled,
        info,
        lastTradeTimestamp,
        local_params,
        n_trade,
        postOnly,
        price,
        reduceOnly,
        remaining,
        side,
        status,
        stopPrice,
        symbol,
        timeInForce,
        timestamp,
        trades,
        type,
        updated,
    } = req.body;
    const order = new Order(req.body);

    await order.save();

    res.json({
        ok:true,
        order
    });
}

module.exports = {
    getOrders,
    createOrder
}