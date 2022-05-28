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
        const resultAddition = await resultUserSchemaAdd;
        const resultFinalAddition = resultAddition.value1 + resultAddition.value2;
        res.status(200).json(resultFinalAddition);
    } catch (error) {
        res.status(400).json({ error: 'Values must be in number format' });
    }
});

module.exports = router;
