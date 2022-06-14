const operationsModel = require('../models/operationsModel');

module.exports = async (req, res) => {
  try {
    const getResults = await operationsModel.find();

    return res.status(200).json(getResults);
  } catch (error) {
    return res.status(400).json({ error });
  }
};
