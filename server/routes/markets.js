/*
    Ruta: /api/markets
*/
const { Router } = require('express');


const router = Router();
const { getMarkets, createMarket } = require('../controllers/markets')

router.get('/', getMarkets);
router.post('/', createMarket);

module.exports = router;