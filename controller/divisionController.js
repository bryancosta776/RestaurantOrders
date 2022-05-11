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
    } catch (error) {
        res.status(400).json({ error: 'Values must be in number format' });
    }
});

module.exports = router;
