const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// const mysql = require('mysql2');
const connect = require('../conexao.js');

router.post('/usuarios', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST');
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.senha, salt);
    if (hash != undefined) {
        return connect.execSQLQuery("insert into usuario (email, senha) value('" + req.body.email + "', '" + hash + "')", res);
    }
    // res.send(req.body.email + ", " + hash)
    // res.end()
    // req.send(req.body.email, hash)
    // req.end()
    // return connect.execSQLQuery(`insert into usuario (email, senha) value(${req.body.email}, ${hash})`, res);
})

module.exports = router;
