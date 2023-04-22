const EvolverParams = require('../models/evolver_params');

const getEvolverParams = async(req, res)=>{

    const evolver_params = await EvolverParams.find();

    res.json({
        ok:true,
        evolver_params
    });
}

const createEvolverParams = async (req, res)=>{

    const { 
        name,
        values 
    } = req.body;
    const evolver_params = new EvolverParams(req.body);

    await evolver_params.save();

    res.json({
        ok:true,
        evolver_params
    });
}

module.exports = {
    getEvolverParams,
    createEvolverParams
}