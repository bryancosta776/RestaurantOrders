const productModel = require('../models/productModel');
const merchantModel = require('../models/merchantModel');

module.exports =  {
  create: async (req, res, next) =>{
    try {
    const { ...data }  = req.body;

    const { merchantId } = req.params;

    const merchantResult = await merchantModel.findById(merchantId);

    const productResult = await productModel.create({ ...data, merchant: merchantResult });

    merchantResult.product.push(productResult);

    merchantResult.save();

    productResult.save();

    res.status(200).json({ merchantResult });
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
