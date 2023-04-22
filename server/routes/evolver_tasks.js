/*
    Ruta: /api/evolver_tasks
*/
const { Router } = require('express');


const router = Router();
const { gete, createMarket, getEvolverTasks, createEvolverTask } = require('../controllers/evolver_task')

router.get('/', getEvolverTasks);
router.post('/', createEvolverTask);

module.exports = router;