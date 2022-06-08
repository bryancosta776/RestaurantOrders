const express = require('express');

const router = express.Router();

const operation = require('../models/operationsModel');


router.post('/addition', async (req, res, next) => {

  try {
    const { value1, value2 } = req.body;

    result = value1 + value2;

    const resultFinalAddition = await operation.create({
       value1: value1,
       value2: value2,
       operation: 'Addition',
       result
      });

    res.status(200).json(resultFinalAddition);

    // SALVAR RESULTADO MONGAO

  } catch (error) {
    next(error);
  }
});

module.exports = router;
