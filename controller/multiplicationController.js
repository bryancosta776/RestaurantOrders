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
        const resultFinalMultiplicion = await resultUserSchemaMult;
        if (resultFinalMultiplicion) {
            const result = value1 * value2;
            res.status(200).json(result);
        }
    } catch (error) {
        res.status(400).json({ error: 'Os values precisam estar no formato number' });
    }
});

module.exports = router;
