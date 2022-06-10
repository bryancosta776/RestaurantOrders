
module.exports = (yupSchema) => async (req, res, next) =>  {
  try {
      const result = await yupSchema.validate(req);
      req.body = result;
      next();
  } catch (err) {
    next(err);
  }
};








