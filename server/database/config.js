const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
        // userNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true
        });
    console.log('DB online');
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar a la bd');
    }

}

module.exports = {
    dbConnection
}