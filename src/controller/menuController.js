 const menuModel = require('../models/menuModel');
 const merchantModel = require('../models/merchantModel');

module.exports = {
  create: async (req, res, next) => {
  try {
    const data  = req.body;

    const { merchantId } = req.params;

    const merchantResult = await merchantModel.findById(merchantId);

    const menuResult = await menuModel.create({ ...data, merchant: merchantId });

    merchantResult.menus.push(menuResult);

    merchantResult.save();

    menuResult.save();

    return res.status(200).json({ merchantResult });
  } catch (error) {
    next(error);
  }
},
list:async (req, res, next) => {
  try {
    const { menuId } = req.params;

    const result = await menuModel.findById(menuId);

    return res.status(200).json({ result });
  } catch (error) {
    // console.log(error);
    next(error);
  }
}
};
