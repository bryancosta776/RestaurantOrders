const Joi = require('joi');

module.exports = Joi.object({
  req: {
    name: Joi.number().required(),
    street: Joi.string().required(),
    neighborhood: Joi.string().required(),
    number: Joi.number().required(),
    numberCellPhone: Joi.number().required(),
    city: Joi.string().required(),
    CEP: Joi.number().required(),
    state: Joi.string().required()
  }
}).unknown(true);
