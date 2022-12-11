const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const mysql = require('mysql2');
require('dotenv').config();

const connect = require('../conexao.js');

const connection = mysql.createConnection({
    host: process.env.BANCO_HOST,
    port: process.env.BANCO_PORT,
    user: process.env.BANCO_USER,
    password: process.env.BANCO_SENHA,
    database: process.env.BANCO
});

router.post('/usuarios', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST');
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.senha, salt);
    if (hash != undefined) {
        return connect.execSQLQuery("insert into usuario (email, senha) value('" + req.body.email + "', '" + hash + "')", res);
    }
})

router.post('/usuarios/login', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST');

    connection.query(
        'SELECT senha FROM usuario WHERE email = ?',
        [req.body.email],
        function (err, results) {
            if (results.length > 0) {
                bcrypt.compare(req.body.senha, results[0].senha, function (err, result) {
                    if (result) {
                        var token = jwt.sign({ email: req.body.email }, process.env.PRIVATE_KEY, { expiresIn: 5 });
                        res.json({ "token": token })
                        res.end()
                    } else {
                        res.json({ "token": undefined })
                        res.end()
                    }
                })
            } else {
                res.json({ "token": undefined })
                res.end()
            };
        }
    );
})

router.get('/usuarios/auth', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST');

    const authHeader = req.headers.authorization;

    const [bearer, token] = authHeader.split(' ');

    try {
        const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
        res.json({ erro: false })
    } catch (error) {
        res.json({ erro: true })
    }

    // console.log({ "Token": token })
    res.end()
})

module.exports = router;
