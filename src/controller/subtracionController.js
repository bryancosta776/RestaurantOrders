const operation = require('../models/operationsModel');

module.exports = async (req, res, next) => {
  try {
    const { value1, value2 } = req.body;

    result = value1 - value2;

    const resultFinalSubtracion = await operation.create({
      value1: value1,
      value2: value2,
      operation: 'Subtracion',
      result
    });

    res.status(200).json({ resultFinalSubtracion });
  } catch (error) {
    next(error);
  }
};
