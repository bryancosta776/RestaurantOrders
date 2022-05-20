const userSchemaYup = require('../models/Yup');

function Yupvalidation(err, req, res, next) {
    const { value1, value2 } = req.body;

    try {
        userSchemaYup.validate(
            {
                value1,
                value2,
            },

            { strict: true },

        );

        next();
    } catch (error) {
        res.status(400).json({ error: err });
    }
}

module.exports = Yupvalidation;
