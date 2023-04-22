/*
    Ruta: /api/portfolios
*/
const { Router } = require('express');


const router = Router();
const { getPorfolios, createPortfolio } = require('../controllers/portfolio')

router.get('/', getPorfolios);
router.post('/', createPortfolio);

module.exports = router;