const express = require('express');
const router = express.Router();

const clientesRoutes = require('./clientes.js');
const usuariossRoutes = require('./usuarios.js');

router.get('/', (req, res) => {
    res.send('A API node está rodando ' + 'neste servidor')
    res.end()
})

// GET node version
router.get('/node', (req, res) => {
    res.send('Aplicação rodando no node v16.18.1')
    res.end()
})

router.use(clientesRoutes);
router.use(usuariossRoutes);

module.exports = router;