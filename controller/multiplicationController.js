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
    } catch (erro) {
        res.status(400).json({ erro: 'Os values precisam estar no formato number' });
    }
});

module.exports = router;
