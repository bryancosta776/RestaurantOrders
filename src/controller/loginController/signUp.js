const jwt  = require('../jwt/jwt');
const login = require('../../models/userModel');


module.exports = async (req, res, next) => {
  try {
    const result = await login.create(req.body);

    const { password, ...user } = result.toObject();

    const token = jwt.sign({ user_id: user._id, email:result.email });

    return res.status(200).json({ user, token });
  } catch (error) {
    return res.status(401).json('Não deu certo');
  }
};
