const express = require('express');

const router = express.Router();

const userSchemaYup = require('../models/Yup');

router.post('/multiplication', async (req, res) => {
    const { value1, value2 } = req.body;

    const resultUserSchemaMult = userSchemaYup.validate(
        {
            value1,
            value2,
        },

        { strict: true },
    );

    try {
        const resultMultiplicacion = await resultUserSchemaMult;
        const resultFinalMultiplicaion = resultMultiplicacion.value1 * resultMultiplicacion.value2;
        res.status(200).json(resultFinalMultiplicaion);
    } catch (error) {
        res.status(400).json({ error: 'Values must be in number format' });
    }
});

module.exports = router;
