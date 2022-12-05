const express =  require('express');
const router = express.Router();

// const mysql = require('mysql2');
const connect = require('../conexao.js');

// GET todos os clientes
router.get('/clientes', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    return connect.execSQLQuery('select * from cliente', res);
})

// GET cliente por id
router.get('/clientes/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    return connect.execSQLQuery('select * from cliente where id = ' + req.params.id, res);
})

// GET cliente por nome
router.get('/clientes/nome/:nome', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    return connect.execSQLQuery("select * from cliente where nome LIKE '" + req.params.nome + "'", res);
})

// PUT cliente
router.put('/clientes/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT');
    return connect.execSQLQuery("update cliente set nome='" + req.body.nome + "' where id=" + req.params.id, res);
})

// POST cliente
router.post('/clientes/', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST');
    return connect.execSQLQuery("insert into cliente (nome) value('" + req.body.nome + "')", res);
})

// DELETE cliente
router.delete('/clientes/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("delete from cliente where id=" + req.params.id, res);
})

module.exports = router;
