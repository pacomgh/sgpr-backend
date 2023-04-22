/*
    Ruta: /api/balances
*/
const { Router } = require('express');


const router = Router();
const { getBalances, createBalance } = require('../controllers/balance')

router.get('/', getBalances);
router.post('/', createBalance);

module.exports = router;