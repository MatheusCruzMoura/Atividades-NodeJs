// Requiring module
const express = require('express');
require('dotenv').config();

const mysql = require('mysql2');
const connect = require('./conexao.js');

// Creating express object
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Handling GET requests
app.get('/', (req, res) => {
    res.send('A API está rodando ' + 'neste servidor')
    res.end()
})

// GET node version
app.get('/node', (req, res) => {
    res.send('Aplicação rodando no node v18.12.1')
    res.end()
})

// GET todos os clientes
app.get('/clientes', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    return connect.execSQLQuery('select * from cliente', res);
})

// GET cliente por id
app.get('/clientes/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    return connect.execSQLQuery('select * from cliente where id = ' + req.params.id, res);
})

// GET cliente por nome
app.get('/clientes/nome/:nome', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    return connect.execSQLQuery("select * from cliente where nome LIKE '" + req.params.nome + "'", res);
})

// PUT cliente
app.put('/clientes/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT');
    return connect.execSQLQuery("update cliente set nome='" + req.body.nome + "' where id=" + req.params.id, res);
})

// POST cliente
app.post('/clientes/', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST');
    return connect.execSQLQuery("insert into cliente (nome) value('" + req.body.nome + "')", res);
})

// DELETE cliente
app.delete('/clientes/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("delete from cliente where id=" + req.params.id, res);
})

// Port Number
const PORT = process.env.PORT || 5001;

// Server Setup
app.listen(PORT, console.log(`Server startes on port ${PORT}`));
