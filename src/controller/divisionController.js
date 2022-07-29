const operation = require('../models/operationsModel');
const users = require('../models/userModel');
const operationCost = 1;

module.exports = async (req, res, next) => {
  try {
    const user = await users.findOne({ id:req.auth.id });

    if(user.credits < operationCost) {
      return res.status(200).json({ message:'Buy new credits to use this API' });
    }
    const { value1, value2 } = req.body;

    result = value1 / value2;

    const resultFinalDivision = await operation.create({
      value1,
      value2,
      operation: 'Division',
      result: result
    });

    return res.status(200).json({ resultFinalDivision });
  } catch (error) {
    next(error);
  }
};
