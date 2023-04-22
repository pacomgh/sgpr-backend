/*
    Ruta: /api/hist_positions
*/
const { Router } = require('express');


const router = Router();
const { getHistPositions, createHistPosition } = require('../controllers/hist_position')

router.get('/', getHistPositions);
router.post('/', createHistPosition);

module.exports = router;