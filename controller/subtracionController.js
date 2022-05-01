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
        const resultFinalSubtracion = await resultUserSchema;
        if (resultFinalSubtracion) {
            const result = value1 - value2;
            res.status(200).json(result);
        }
    } catch (error) {
        res.status(400).json({ error: 'Os values precisam estar no formato number' });
    }
    /* .then(() => {
        const resultSubtracion = value1 - value2;
        return res.status(200).json(resultSubtracion);
    }).catch(err => res.status(400).json({ err: err.errors })) */
});

module.exports = router;
