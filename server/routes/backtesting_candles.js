/*
    Ruta: /api/backtesting_candles
*/
const { Router } = require('express');


const router = Router();
const { getBacktestingCandles, createBacktestingCandles } = require('../controllers/backtesting_candles')

router.get('/', getBacktestingCandles);
router.post('/', createBacktestingCandles);

module.exports = router;