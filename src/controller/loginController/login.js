const login = require('../../models/userModel');
const jwt  = require('../jwt/jwt');

const  crypto  =  require('crypto');

module.exports = async (req, res) => {
 const [ , hash ] = req.headers.authorization.split(' ');

 const [email, password]  = Buffer.from(hash, 'base64').toString().split(':');

 try {
    const user = await login.findOne({ email });

   const encriptedPass = crypto.createHash('md5').update(password).digest('hex');

   if(encriptedPass!== user.password) return res.json({ message: 'User not authorized' }).status(401);

   if(!user) return res.status(401);

    const token = jwt.sign({ user: user.id });

    return res.status(200).json( {
      name:user.name,
      email:user.email,
      token
  });
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
};
