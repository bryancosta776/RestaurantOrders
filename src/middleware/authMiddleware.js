const jwt = require('../controller/jwt/jwt');
const login = require('../models/userModel');

module.exports = async (req, res, next) => {


  try {
    const token = req.headers.authorization.split(' ');

    const payload =  jwt.verify(token[1]);

    const user = await login.findById(payload.user_id);

    if(!user) return res.status(401);

    req.auth = user;
    return next();
  } catch (err) {
    return next(new Error('Something wrong with credentials'));
  }
};
