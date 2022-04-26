const express = require('express');

const router = express.Router();

router.post('/addition', (req, res) => {
    const { value1, value2 } = req.body;

    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        res.status(400).json({ error: 'Os valores precisam estar no formato Number' });
    } else {
        const resultAddition = value1 + value2;
        res.status(200).json(resultAddition);
    }
});

module.exports = router;
