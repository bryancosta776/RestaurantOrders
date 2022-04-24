const express = require('express');

const app = express();

app.use(express.json());

const resultsCalculator = [];

app.get('/calculator', (req, res) => {
    res.status(200).json({ resultsCalculator });
});

app.post('/addition', (req, res) => {
    const { value1, value2 } = req.body;

    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        res.status(400).json({ error: 'Os valores precisam estar no formato Number' });
    } else {
        const resultAddition = value1 + value2;
        res.status(200).json(resultAddition);
    }
});

app.post('/subtraction', (req, res) => {
    const { value1, value2 } = req.body;

    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        res.status(400).json({ error: 'Os valores precisam estar no formato Number' });
    } else {
        const resultSubtracion = value1 - value2;
        res.status(200).json(resultSubtracion);
    }
});

app.post('/division', (req, res) => {
    const { value1, value2 } = req.body;

    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        res.status(400).json({ error: 'Os valores precisam estar no formato Number' });
    } else {
        const resultDivision = value1 / value2;
        res.status(200).json(resultDivision);
    }
});

app.post('/multiplication', (req, res) => {
    const { value1, value2 } = req.body;

    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        res.status(400).json({ error: 'Os valores precisam estar no formato Number' });
    } else {
        const resultMultiplication = value1 * value2;
        res.status(200).json(resultMultiplication);
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.info(PORT);
});
