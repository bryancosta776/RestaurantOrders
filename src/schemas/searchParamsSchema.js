const Yup = require('yup');

module.exports = Yup.object({
  query: Yup.object({
    operations: Yup.string().required()
  })
});
