const express = require('express');

const app = express();

app.use(express.json());

const resultsCalculator = [];

app.get('/calculator', (req, res) => {
    res.status(200).json({ resultsCalculator });
});

app.post('/addition', (req, res) => {
    const { value1, value2 } = req.body;

    const resultValue1 = Number(value1);
    const resultValue2 = Number(value2);

    const resultAddition = resultValue1 + resultValue2;

    res.status(201).json(resultAddition);
});

app.post('/subtraction', (req, res) => {
    const { value1, value2 } = req.body;

    const resultValue1 = Number(value1);
    const resultValue2 = Number(value2);

    const resultSubtraction = resultValue1 - resultValue2;

    res.status(201).json(resultSubtraction);
});

app.post('/division', (req, res) => {
    const { value1, value2 } = req.body;

    const resultValue1 = Number(value1);
    const resultValue2 = Number(value2);

    const resultDivision = resultValue1 / resultValue2;

    res.status(200).json(resultDivision);
});

app.post('/multiplication', (req, res) => {
    const { value1, value2 } = req.body;

    const resultValue1 = Number(value1);
    const resultValue2 = Number(value2);

    const resultMultiplication = resultValue1 * resultValue2;

    res.status(201).json(resultMultiplication);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.info(PORT);
});
