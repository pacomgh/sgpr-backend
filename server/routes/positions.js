/*
    Ruta: /api/positions
*/
const { Router } = require('express');


const router = Router();
const { getPositions, createPosition } = require('../controllers/position')

router.get('/', getPositions);
router.post('/', createPosition);

module.exports = router;