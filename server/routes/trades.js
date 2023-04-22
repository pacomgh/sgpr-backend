/*
    Ruta: /api/trades
*/
const { Router } = require('express');


const router = Router();
const { getTrades, createTrade } = require('../controllers/trade')

router.get('/', getTrades);
router.post('/', createTrade);

module.exports = router;