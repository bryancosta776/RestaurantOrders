const operation = require('../models/operationsModel');
const users = require('../models/userModel');
const operationCost = 1;

module.exports = async (req, res, next) => {
  try {
    const user = await users.findOne({ id: req.auth.id });

    if(user.credits < operationCost) {
      return res.status(200).json({ message:'Buy new credits to use this API' });
    }
    const { value1, value2 } = req.body;

    result = value1 - value2;

    const resultFinalSubtracion = await operation.create({
      value1,
      value2,
      operation: 'Subtracion',
      result
    });

    return res.status(200).json({ resultFinalSubtracion });
  } catch (error) {
    next(error);
  }
};
