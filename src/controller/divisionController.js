const operationModel = require('../models/operationsModel');
const users = require('../models/userModel');
const operationCost = 1;

module.exports = async (req, res, next) => {
  try {
    const user = await users.findOne({ id: req.auth.id });

    const { operations } = req.body;

    if(user.credits < (operationCost * operations.length)) {
      return res.status(200).json({ message:'Buy new credits to use this API' });
    }

    const results = [];

    user.credits = user.credits - operations.length;

    operations.forEach(async (op) => {
      const { value1, value2 } = op;

      div = value1 / value2;

      results.push({ result: div, value1, value2, operation: 'Division' });

      await operationModel.create({
        value1,
        value2,
        operation: 'Division',
        result: add
      });
    });

    await user.save();

    return res.status(200).json({ results });
  } catch (error) {
    next(error);
  }
};
