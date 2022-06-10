const Yup = require('yup');

const searchParamsSchema = Yup.object({
  operation: {
    value1: Yup.number().required(),
    value2: Yup.number().required(),
    result: Yup.number().required(),
    operation: Yup.string().required()
  }

});

module.exports = searchParamsSchema;
