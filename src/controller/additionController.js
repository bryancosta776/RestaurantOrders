const operationsModel = require('../models/operationsModel');
const users = require('../models/userModel');
const operationCost = 1;

module.exports = async (req, res, next) => {
  try {
    const user = await users.findById({ _id: req.auth._id });

    const { operations } = req.body;

    if(user.credits < (operationCost * operations.length)) {
      return res.status(200).json({ message:'Buy new credits to use this API' });
    }

    const results = [];

    user.credits = user.credits - operations.length;

    operations.forEach(async (op) => {
      const { value1, value2 } = op;

      add = value1 + value2;

      results.push({ result: add, value1, value2, operation: 'Addition' });

      await operationsModel.create({
        value1,
        value2,
        operation: 'Addition',
        result: add
      });
    });

    await user.save();

    return res.status(200).json({ results });
  } catch (error) {
    next(error);
  }
};
