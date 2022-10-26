 const menuModel = require('../models/menuModel');
 const merchantModel = require('../models/merchantModel');

module.exports = {
  create: async (req, res, next) => {
  try {
    const { merchantId } = req.params;
    const data = req.body;

    const result = await menuModel.create({ ...data, merchant:merchantId });

    const merchant = await merchantModel.findById(merchantId);

    merchant.menus.push(result);

    merchant.save();

    return res.status(200).json({ result });
  } catch (error) {
    // console.log(error);
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
