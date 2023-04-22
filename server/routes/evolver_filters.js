/*
    Ruta: /api/evolver_filters
*/
const { Router } = require('express');


const router = Router();
const { getEvolverFilter, createEvolverFilter } = require('../controllers/evolver_filters')

router.get('/', getEvolverFilter);
router.post('/', createEvolverFilter);

module.exports = router;