module.exports = (yupSchema) => async (req, res, next) => {
  try {
     await yupSchema.validate(req, { strict: true });


    next();
  } catch (err) {
    next(err);
  }
};
