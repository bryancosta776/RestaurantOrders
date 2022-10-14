const menu = require('../models/menuModel');


module.exports = async (req, res, next) => {
  try {
    const { name } = req.body;

    const result = await menu.create({ name });

    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
};
