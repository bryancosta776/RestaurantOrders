const userSchemaYup = require('../models/Yup');

module.exports = async (req, res, next) => {
  try {
    const result = userSchemaYup.validate(
      {
        ...req.body
      },
      { strict: true }
    );

    req.body = await result;

    next();
  } catch (err) {
    next(err);
  }
};
