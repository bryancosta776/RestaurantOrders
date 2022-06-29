const login = require('../../models/userModel');


module.exports =  async (req, res) => {
  try {
    const users = await login.find(req.query, ['name', 'email', '-_id']);
    res.json(users);
  } catch (error) {
    res.json(error);
  }
};
