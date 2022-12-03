// Requiring module
const express = require('express');
require('dotenv').config();

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

// Port Number
const PORT = process.env.PORT || 5001;

// Server Setup
app.listen(PORT, console.log(`Server startes on port ${PORT}`));
