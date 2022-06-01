

const express = require('express');

const router = express.Router();

const resultCalculator = require('../models/config/resultCalculator');


router.post('/addition', async (req, res, next) => {

  try {
    const { value1, value2 } = req.body;

    result = value1 + value2;

    const resultFinalAddition = await resultCalculator.create({
       value1: value1,
       value2: value2,
       operation: 'Addtion',
       result

      });

    res.status(200).json(resultFinalAddition);

    // SALVAR RESULTADO MONGAO

  } catch (error) {
    next(error);
  }
});

module.exports = router;
