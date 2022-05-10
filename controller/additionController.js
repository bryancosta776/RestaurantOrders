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
    } catch (erro) {
        res.status(400).json({ erro: 'Os values precisam estar no formato number' });
    }
});

module.exports = router;
