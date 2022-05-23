const userSchemaYup = require('../models/Yup');

function validator(err, req, res, next) {
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
        res.json({ err: error });
        next(err);
    }
}
module.exports = validator;
