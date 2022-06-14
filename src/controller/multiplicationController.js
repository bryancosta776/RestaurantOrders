const operation = require('../models/operationsModel');

module.exports = async (req, res) => {
  try {
    const { value1, value2 } = req.body;

    result = value1 * value2;

    const resultFinalMultiplicacion = await operation.create({
      value1,
      value2,
      operation: 'Multiplicacion',
      result
    });

    return res.status(200).json({ resultFinalMultiplicacion });
  } catch (error) {
    next(error);
  }
};
