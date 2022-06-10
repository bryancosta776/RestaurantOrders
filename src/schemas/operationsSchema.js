const Yup = require('yup');

const userSchemaYup = Yup.object({
    value1: Yup.number().required(),
    value2: Yup.number().required(),
    operation: Yup.string().required(),
    result: Yup.number().required()
});

module.exports = userSchemaYup;
