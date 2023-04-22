const Utils = require('../models/utils');

const getUtils = async(req, res)=>{

    const utils = await Utils.find();

    res.json({
        ok:true,
        utils
    });
}

const createUtils = async (req, res)=>{

    const { 
        docname,
        strategies_counter
    } = req.body;
    const utils = new Utils(req.body);

    await utils.save();

    res.json({
        ok:true,
        utils
    });
}

module.exports = {
    getUtils,
    createUtils
}