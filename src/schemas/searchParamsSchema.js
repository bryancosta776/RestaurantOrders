const Joi = require('joi');

module.exports = Joi.object({
  query: Joi.object({
    operation: Joi.string().required()
  })
}).unknown(true);
