const express = require('express');

const router = express.Router();

const userSchemaYup = require('../models/Yup');

router.post('/subtraction', async (req, res) => {
    const { value1, value2 } = req.body;

    const resultUserSchema = userSchemaYup.validate(
        {
            value1,
            value2,
        },

        { strict: true },
    );
    try {
        const resultSubtracion = await resultUserSchema;
        const resultFinalSubtracion =
            resultSubtracion.value1 - resultSubtracion.value2;
        res.json(200).json(resultFinalSubtracion);
    } catch (error) {
        res.status(400).json({ error: 'Values must be in number format' });
    }
});

module.exports = router;
