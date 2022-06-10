const express = require('express');

const operationsSchema = require('../models/operationsModel');

const router = express.Router();



router.get('/searchParams',  async (req, res, next) => {
  const { operations } = req.query;
  try{
    const resultOperations = await operationsSchema({ operations });
    res.json(200).json(resultOperations);
  }catch(error){
    res.status(400).json(error);
  }

});



module.exports = router;
