const EvolverTask = require('../models/evolver_task');

const getEvolverTasks = async(req, res)=>{

    const evolver_tasks = await EvolverTask.find();

    res.json({
        ok:true,
        evolver_tasks
    });
}

const createEvolverTask = async (req, res)=>{

    const { 
        blackbox,
        timeframe,
        exchange,
        market_type,
        symbol,
        period,
        train_test_prop,
        parameters,
        filter,
        running,
    } = req.body;
    const evolver_task = new EvolverTask(req.body);

    await evolver_task.save();

    res.json({
        ok:true,
        evolver_task
    });
}

module.exports = {
    getEvolverTasks,
    createEvolverTask
}