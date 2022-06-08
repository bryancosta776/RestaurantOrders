const Yup = require('yup');

const searchParamsSchema = Yup.object({
  value1: Yup.number().required(),
  value2: Yup.number().required()
});

module.exports = searchParamsSchema;
