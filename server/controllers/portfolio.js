const Portfolio = require('../models/portfolio');

const getPorfolios = async(req, res)=>{

    const portfolios = await Portfolio.find();

    res.json({
        ok:true,
        portfolios
    });
}

const createPortfolio = async (req, res)=>{

    const { 
        name,
        last_signal
    } = req.body;
    const portfolio = new Portfolio(req.body);

    await portfolio.save();

    res.json({
        ok:true,
        portfolio
    });
}

module.exports = {
    getPorfolios,
    createPortfolio
}