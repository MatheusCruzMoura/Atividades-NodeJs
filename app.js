// Requiring module
const express = require('express');
require('dotenv').config();

const mysql = require('mysql2');
const connect = require('./conexao.js');

// Creating express object
const app = express();

// Handling GET requests
app.get('/', (req, res) => {
    res.send('A API está rodando ' + 'neste servidor')
    res.end()
})

app.get('/node', (req, res) => {
    res.send('Aplicação rodando no node v18.12.1')
    res.end()
})

app.get('/clientes', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from cliente', res);
})

// Port Number
const PORT = process.env.PORT || 5001;

// Server Setup
app.listen(PORT, console.log(`Server startes on port ${PORT}`));
