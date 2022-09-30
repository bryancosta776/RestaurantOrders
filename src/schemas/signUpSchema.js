const Joi = require('joi');

module.exports = Joi.object({
  body: {
    email: Joi.string().required(),
    name: Joi.string().required(),
    password: Joi.string().required(),
    cpfCnpj: Joi.string().required()
  }
}).unknown(true);
