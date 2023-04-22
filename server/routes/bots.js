/*
    Ruta: /api/bots
*/
const { Router } = require('express');


const router = Router();
const { getBots, createBot } = require('../controllers/bot')

router.get('/', getBots);
router.post('/', createBot);

module.exports = router;