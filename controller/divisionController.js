const express = require('express');

const router = express.Router();

const userSchemaYup = require('../models/Yup');

router.post('/division', async (req, res) => {
    const { value1, value2 } = req.body;

    const resultUserDivi = userSchemaYup.validate(
        {
            value1,
            value2,
        },

        { strict: true },
    );
    try {
        const resultDivision = await resultUserDivi;
        const resultFinalDivision = resultDivision.value1 / resultDivision.value2;
        res.status(200).json(resultFinalDivision);
    } catch (erro) {
        res.status(400).json({ erro: 'Os values precisam estar no formato number' });
    }
});

module.exports = router;
