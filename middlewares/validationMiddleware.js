const Joi = require('joi');

function validate(schema) {
  return function(req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
  }
}

const roomTypeSchema = Joi.object({
  name: Joi.string().required()
});

const roomSchema = Joi.object({
  name: Joi.string().required(),
  roomType: Joi.string().required(),
  price: Joi.number().required()
});
