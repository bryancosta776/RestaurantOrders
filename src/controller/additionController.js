const operations = require('../models/operationsModel');
const users = require('../models/userModel');
const operationCost = 1;

module.exports = async (req, res, next) => {
  try {
    const user = await users.findOne({ id: req.auth.id });

    if (user.credits < operationCost) {
      return res.status(200).json({ message: 'Buy new credits to use this API' });
    }
    const { value1, value2 } = req.body;


    const operationsResult = await operations.create({
      operations: [
        {
          value1: value1,
          value2: value2
        },
        {
          value1: value1,
          value2: value2
        }
      ]

    });
    user.credits = user.credits - operationCost;


    await user.save();

    return res.status(200).json({ result: operationsResult });
  } catch(error) {
    console.log(error);
    next(error);
  }
};
/* {
      operations: [
        {
          value1: value1,
          value2: value2
        },
        {
          value1: value1,
          value2: value2
        }
      ];


      {
          value1: value1,
          value2: value2,
          operation: 'Addition',
          result: value1 + value2
        }
    } */
