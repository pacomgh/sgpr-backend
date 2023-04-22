/*
    Ruta: /api/strategies
*/
const { Router } = require('express');


const router = Router();
const { getStrategies, createStrategy } = require('../controllers/strategy')

router.get('/', getStrategies);
router.post('/', createStrategy);

module.exports = router;