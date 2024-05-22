const express = require('express');
const path = require('path');
const calculateVolume = require('./calculate');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/calculate', (req, res) => {
    const { shape, radius, height } = req.body;
    try {
        const volume = calculateVolume(shape, radius, height);
        res.json({ shape, volume });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

// Adiciona um manipulador de eventos para fechar o servidor quando o processo terminar
process.on('SIGTERM', () => {
    console.log('Closing server...');
    server.close(() => {
        console.log('Server closed.');
    });
});

module.exports = server; // Exporta o app para fins de teste