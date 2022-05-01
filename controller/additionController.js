const express = require('express');

const userSchemaYup = require('../models/Yup');

const router = express.Router();

router.post('/addition', async (req, res) => {
    const { value1, value2 } = req.body;

    const resultUserSchemaAdd = userSchemaYup.validate(
        {
            value1,
            value2,
        },

        { strict: true },
    );
    try {
        const resultFinalMultiplicion = await resultUserSchemaAdd;
        if (resultFinalMultiplicion) {
            const result = value1 + value2;
            res.status(200).json(result);
        }
    } catch (error) {
        res.status(400).json({ error: 'Os values precisam estar no formato number' });
    }
});

module.exports = router;
