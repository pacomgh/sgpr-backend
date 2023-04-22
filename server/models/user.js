const { Schema, model } = require('mongoose');

const userSchema = Schema({
    username: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    role: {
        type: String,
    },
    google: {
        type: String,
        required: false,
    }
});

module.exports = model('Usuario', userSchema);
