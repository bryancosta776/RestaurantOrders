const register = require('../models/registerModel');


module.exports = async (req, res, next) => {
  try {
    const { name, street, neighborhood, number, numberCellPhone, city, CEP, state } = req.body;

    const registerRest = await register.create({ name, street, neighborhood, number, numberCellPhone, city, CEP, state });

    res.status(200).json({ registerRest });

  } catch (error) {
    next(error);
  }
};
