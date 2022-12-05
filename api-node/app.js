// Requiring module
const express = require('express');
require('dotenv').config();

const userRoutes = require('./routes/clientes.js');

// Creating express object
const app = express();
app.use(express.json());
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

// Rotas dos clientes
app.use("/", userRoutes)

// Port Number
const PORT = process.env.PORT || 5001;

// Server Setup
app.listen(PORT, console.log(`Server startes on port ${PORT}`));
