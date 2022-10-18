const menu = require('../models/menuModel');

const register = require('../models/registerModel');

module.exports = async (req, res, next) => {
  try {

    const { menuOption } = req.body;

    const resultMenu = [];

    menuOption.forEach(async (op) => {
      const { name, id } = op;

      resultMenu.push(name, id);

      const idRest = await register.findByIdAndUpdate(id);

      idRest.menu.push(resultMenu);

      resultMenus.menu.push({ resultMenu });

    });


    res.status(200).json({ resultMenu });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
