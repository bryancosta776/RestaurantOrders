const jwt  = require('../jwt/jwt');
const login = require('../../models/userModel');
const { v4 } = require('uuid');

module.exports = async (req, res, next) => {
  try {
    const result = await login.create({ ...req.body, id:v4() });

    const { password,  ...user } = result.toObject();

    const token = jwt.sign({ user_id: user.id, email: result.email });

    return res.status(200).json({ user, token  });
  } catch (error) {
    return res.status(401).json('Não deu certo');
  }
};


