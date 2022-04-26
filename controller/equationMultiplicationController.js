const express = require('express');

const router = express.Router();

router.post('/multiplication', (req, res) => {
    const { value1, value2 } = req.body;

    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        res.status(400).json({ error: 'Os valores precisam estar no formato Number' });
    } else {
        const resultMultiplication = value1 * value2;
        res.status(200).json(resultMultiplication);
    }
});

module.exports = router;
