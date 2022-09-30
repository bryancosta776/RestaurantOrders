const Joi = require('joi');

module.exports = Joi.object({
  req: {
    value1: Joi.number().required(),
    value2: Joi.number().required()
  }
}).unknown(true);
