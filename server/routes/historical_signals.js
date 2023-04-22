/*
    Ruta: /api/historical_signals
*/
const { Router } = require('express');


const router = Router();
const { getHistoricalSignals, createHistoricalSignal } = require('../controllers/historical_signals')

router.get('/', getHistoricalSignals);
router.post('/', createHistoricalSignal);

module.exports = router;