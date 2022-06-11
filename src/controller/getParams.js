const operationsSchema = require('../models/operationsModel');

module.exports = async (req, res, next) => {
  const { operations } = req.query;
  try {
    const resultOperations = await operationsSchema({ operations });
    return res.status(200).json(resultOperations);
  } catch (error) {
    return res.status(400).json(error);
  }
};
