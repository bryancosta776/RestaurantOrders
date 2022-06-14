const Yup = require('yup');

module.exports = Yup.object({
  query: Yup.object({
    operation: Yup.string().required()
  })
});
