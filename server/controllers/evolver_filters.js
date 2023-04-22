const EvolverFilter = require('../models/evolver_filter');

const getEvolverFilter = async(req, res)=>{

    const evolver_filter = await EvolverFilter.find();

    res.json({
        ok:true,
        evolver_filter
    });
}

const createEvolverFilter = async (req, res)=>{

    const { 
        name,
        values
    } = req.body;
    const evolver_filter = new EvolverFilter(req.body);

    await evolver_filter.save();

    res.json({
        ok:true,
        evolver_filter
    });
}

module.exports = {
    getEvolverFilter,
    createEvolverFilter
}