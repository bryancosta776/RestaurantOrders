module.exports = (yupSchema) => async (req, res, next) => {
  try {
    await yupSchema.validateSync(req, { strict: true });

    next();
  } catch (err) {
    next(err);
  }
};
