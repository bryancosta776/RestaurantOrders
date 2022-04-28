const express = require('express');

const router = express.Router();

const userSchemaYup = require('../models/Yup');

router.post('/multiplication', (req, res) => {
    const { value1, value2 } = req.body;

    userSchemaYup.validate(
        {
            value1,
            value2,
        },

        { strict: true },
    ).then(() => {
        const resultMultiplication = value1 * value2;
        return res.status(200).json(resultMultiplication);
    }).catch(err => res.status(400).json({ err: err.errors }));
});

module.exports = router;
