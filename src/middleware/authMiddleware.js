const jwt = require('../controller/jwt/jwt');
const login = require('../models/loginModel');

module.exports = async (req, res, next) => {
    const token = req.headers.authorization.split(' ');

  try {
    const payload =  jwt.verify(token[1]);

    const user = await login.findById(payload.user_id);

    if(!user) return res.status(401);

    req.auth = user;

    next();
  } catch (error) {
    return res.json(error).status(401);
  }
};
