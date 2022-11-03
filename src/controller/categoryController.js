
const categoryModel = require('../models/categoryModel');
const menuModel = require('../models/menuModel');

module.exports = {
  create: async (req, res, next) => {
    try {

      const data = req.body;

      const { menuId } = req.params;

      const categoryResult = await categoryModel.create({ ...data, menu: menuId });

      res.status(200).json({ categoryResult });

    } catch (error) {
      next(error);
    }
  }
};
