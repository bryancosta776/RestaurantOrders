const operation = require('../models/operationsModel');

module.exports = async (req, res, next) => {
  try {
    const { value1, value2 } = req.body;

    result = value1 / value2;

    const resultFinalDivision = await operation.create({
      value1: value1,
      value2: value2,
      operation: 'Division',
      result
    });

    return res.status(200).json(resultFinalDivision);
  } catch (error) {
    return next(error);
  }
};
