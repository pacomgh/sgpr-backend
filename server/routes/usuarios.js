/*
    Ruta: /api/usuarios
*/

const { Router } = require('express');
const { getUsers, createUser } = require('../controllers/usuarios');

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);

module.exports = router;