/*
    Ruta: /api/evolver_params
*/
const { Router } = require('express');


const router = Router();
const { getEvolverParams, createEvolverParams } = require('../controllers/evolver_params')

router.get('/', getEvolverParams);
router.post('/', createEvolverParams);

module.exports = router;