/*
    Ruta: /api/orders
*/
const { Router } = require('express');


const router = Router();
const { getOrders, createOrder } = require('../controllers/order')

router.get('/', getOrders);
router.post('/', createOrder);

module.exports = router;