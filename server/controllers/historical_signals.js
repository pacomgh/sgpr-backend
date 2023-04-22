const HistoricalSignal = require('../models/historical_signal');

const getHistoricalSignals = async(req, res)=>{

    const historical_signals = await HistoricalSignal.find();

    res.json({
        ok:true,
        historical_signals
    });
}

const createHistoricalSignal = async (req, res)=>{

    const { 
        bot_id,
        signal,
        datetime,
        processing_time,
    } = req.body;
    const historical_signal = new HistoricalSignal(req.body);

    await historical_signal.save();

    res.json({
        ok:true,
        historical_signal
    });
}

module.exports = {
    getHistoricalSignals,
    createHistoricalSignal
}