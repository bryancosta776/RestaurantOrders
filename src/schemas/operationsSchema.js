const Joi = require('joi');

module.exports = Joi.object({
  body: {
    value1: Joi.number().required(),
    value2: Joi.number().required()
  }
}).unknown(true);
