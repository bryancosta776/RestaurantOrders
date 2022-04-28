const express = require('express');

const userSchemaYup = require('../models/Yup');

const router = express.Router();

router.post('/addition', (req, res) => {
    const { value1, value2 } = req.body;

    userSchemaYup.validate(
        {
            value1,
            value2,
        },

        { strict: true },
    ).then(() => {
        const resultAddition = value1 + value2;
        return res.status(200).json(resultAddition);
    }).catch(err => res.status(400).json({ err: err.errors }));
});

module.exports = router;
