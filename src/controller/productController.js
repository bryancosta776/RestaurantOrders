const productModel = require('../models/productModel');
const merchantModel = require('../models/merchantModel');

module.exports =  {
  create: async (req, res, next) =>{
    try {
      const data  = req.body;

      const { merchantId } = req.params;

      const result = await productModel.create({ ...data, merchant: merchantId });

      const merchant = await merchantModel.findById(merchantId);

      merchant.product.push(result);

      merchant.save();

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
  list: async (req, res, next) => {
    try {
      const { productId } = req.params;

      const result = await productModel.findById(productId);

      return res.status(200).json({ result });
    } catch (error) {
      next(error);
    }

  }

};
