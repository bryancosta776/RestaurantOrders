const userSchemaYup = require('../models/Yup');

function validator(err, req, res, next) {
    const { value1, value2 } = req.body;

    userSchemaYup.validate(
        {
            value1,
            value2,
        },

        { strict: true },

    );
    next();
}

module.exports = validator;
