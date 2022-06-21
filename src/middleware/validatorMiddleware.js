module.exports = (schema) => async (req, res, next) => {
   const { error } = await schema.validate(req);

   if(error){
    return res.status(400).json({ error: error?.message }).end();
   }

    return next();

};
