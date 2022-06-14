const Yup = require('yup');

module.exports = Yup.object({
  body: {
    value1: Yup.number().required(),
    value2: Yup.number().required()
  }
});
