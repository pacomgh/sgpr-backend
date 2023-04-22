const Usuario = require('../models/user');

const getUsers = async (req, res)=>{

    const usuarios = await Usuario.find();

    res.json({
        ok:true,
        usuarios
    });
}

const createUser = async(req, res)=>{

    const {email, password, username} = req.body;
    console.log(username);
    const usuario = new Usuario(req.body);

    await usuario.save();

    res.json({
        ok:true,
        usuario
    });
}

module.exports = {
    getUsers,
    createUser
}