const Bot = require('../models/bot');

const getBots = async(req, res)=>{

    const bots = await Bot.find();

    res.json({
        ok:true,
        bots
    });
}

const createBot = async (req, res)=>{

    const { 
        account,
        apiKey,
        datetime,
        exchange,
        exchange_credentials,
        exit_on_signal,
        go_long,
        go_short,
        ignore_last_candle,
        initial_balance,
        initial_entry_allocation,
        last_signal,
        market_type,
        master,
        next_run,
        password,
        portfolio_id,
        reinvest_profits,
        running,
        secret,
        server,
        signal_distance,
        stop_loss_value,
        strat_params,
    } = req.body;
    const bot = new Bot(req.body);

    await bot.save();

    res.json({
        ok:true,
        bot
    });
}

module.exports = {
    getBots,
    createBot
}