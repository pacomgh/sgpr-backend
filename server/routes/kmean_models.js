/*
    Ruta: /api/kmean_models
*/
const { Router } = require('express');


const router = Router();
const { getKmeanModels, createKmenaModel } = require('../controllers/kmean_model')

router.get('/', getKmeanModels);
router.post('/', createKmenaModel);

module.exports = router;