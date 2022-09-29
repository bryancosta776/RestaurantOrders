const operationsModel = require('../models/operationsModel');
const users = require('../models/userModel');
const operationCost = 1;

module.exports = async (req, res, next) => {
  try {
    const user = await users.findById({ id: req.auth._id });

    const { operations } = req.body;

    if(user.credits < operationCost){
      return res.status(200).json({ message: 'Buy new credits to use this API' });
    }

    if(user.credits < operations.length){
      return res.status(200).json({ message: 'insufficient credit buy new credits to use this API' });
    }


    const results = [];

    user.credits = user.credits - operations.length;

    operations.forEach(async (op) => {
      const { value1, value2 } = op;

      mult = value1 * value2;

      results.push({ result: mult, value1, value2, operation: 'Multiplication' });

      await operationsModel.create({
        value1,
        value2,
        operation: 'Multiplication',
        result: mult
      });
    });

    await user.save();

    return res.status(200).json({ results });
  } catch (error) {
    next(error);
  }
};
