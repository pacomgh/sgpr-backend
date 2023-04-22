const KmeanModel = require('../models/kmean_model');

const getKmeanModels = async(req, res)=>{

    const kmean_models = await KmeanModel.find();

    res.json({
        ok:true,
        kmean_models
    });
}

const createKmenaModel = async (req, res)=>{

    const { 
        trading_model,
        params,
    } = req.body;
    const kmean_model = new KmeanModel(req.body);

    await kmean_model.save();

    res.json({
        ok:true,
        kmean_model
    });
}

module.exports = {
    getKmeanModels,
    createKmenaModel
}