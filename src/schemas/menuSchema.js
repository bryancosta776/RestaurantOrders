const Joi = require('joi');

module.exports = Joi.object({
  body: {
    name: Joi.string().required(),
    id: Joi.string().required()
  }
}).unknown(true);
