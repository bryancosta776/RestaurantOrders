const operationsSchema = require('../schemas/operationsSchema');

module.exports = async (req, res, next) => {
  try {
    const result = operationsSchema.validate(
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
