const operations = require('../models/operationsModel');
const users = require('../models/userModel');
const operationCost = 50;

module.exports = async (req, res, next) => {
  try {
    const user = await users.findOne({ id:req.auth.id });

    if(user.credits < operationCost) {
      return res.status(200).json({ message:'Buy new credits to use this API' });
    }

    const { value1, value2 } = req.body;

    resultAdd = value1 + value2;

    const resultFinalAdditio = await operations.create({
      value1,
      value2,
      operation: 'Addition',
      result: resultAdd
    });

    user.credits =  user.credits - operationCost;

    await user.save();

    return res.status(200).json({ resultFinalAdditio });
  } catch (error) {
    next(error);
  }
};
