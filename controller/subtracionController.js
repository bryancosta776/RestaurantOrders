const express = require('express');

const router = express.Router();

const resultCalculator = require('../models/config/resultCalculator');

router.post('/subtraction', async (req, res, next) => {

    try {
        const { value1, value2 } = req.body;

        result = value1 - value2;

        const resultFinalSubtracion = await  resultCalculator.create({ result });

        res.status(200).json(resultFinalSubtracion);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
