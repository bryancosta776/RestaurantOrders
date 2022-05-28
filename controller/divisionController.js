const express = require('express');

const router = express.Router();

const Yupvalidation = require('./auth');

router.post('/division', Yupvalidation, (req, res) => {
    try {
        const resultFinalDivision = Yupvalidation.value1 / Yupvalidation.value2;
        res.status(200).json(resultFinalDivision);
    } catch {
        res.status(400).json({ message: 'fechou' });
    }
});

module.exports = router;
