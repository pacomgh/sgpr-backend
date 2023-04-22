/*
    Ruta: /api/utils
*/
const { Router } = require('express');


const router = Router();
const { getUtils, createUtils } = require('../controllers/utils')

router.get('/', getUtils);
router.post('/', createUtils);

module.exports = router;