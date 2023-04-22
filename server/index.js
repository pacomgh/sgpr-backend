require('dotenv').config;
const express = require('express');
var cors = require('cors')

const { dbConnection } = require('./database/config');

const app = express();

//config cors
app.use(cors());

//read and parse body
app.use(express.json());

//conect db
dbConnection();

//routes
//middlewares
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/markets', require('./routes/markets'));
app.use('/api/balances', require('./routes/balances'));
app.use('/api/strategies', require('./routes/strategies'));
app.use('/api/bots', require('./routes/bots'));
app.use('/api/evolver_filters', require('./routes/evolver_filters'));
app.use('/api/evolver_params', require('./routes/evolver_params'));
app.use('/api/evolver_tasks', require('./routes/evolver_tasks'));
app.use('/api/historical_signals', require('./routes/historical_signals'));
app.use('/api/hist_positions', require('./routes/hist_positions'));
app.use('/api/kmean_models', require('./routes/kmean_models'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/portfolios', require('./routes/portfolios'));
app.use('/api/positions', require('./routes/positions'));
app.use('/api/trades', require('./routes/trades'));
app.use('/api/utils', require('./routes/utils'));
app.use('/api/backtesting_candles', require('./routes/backtesting_candles'));


app.listen(process.env.PORT, ()=>{
    console.log('Servidor running');
})