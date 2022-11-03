const merchant = require('../models/merchantModel');

module.exports = {
  create: async (req, res, next)=>{
    try {
      const { name, street, neighborhood, number, numberCellPhone, city, CEP, state } = req.body;

      const result = await merchant.create({ name, street, neighborhood, number, numberCellPhone, city, CEP, state });

      return res.status(200).json({ ...result.toJSON() });

    } catch (error) {
      next(error);
    }
  },
  list: async (req, res, next)=>{
    try {
      const result = await merchant.findById(req.query.merchantId).populate('product');

      return res.status(200).json({ ...result._doc });

    } catch (error) {
      next(error);
    }
  }
};
