const express = require('express');

const router = express.Router();

const operation = require('../models/operationsModel');

router.post('/multiplication', async (req, res) => {
  try {
    const { value1, value2 } = req.body;

    result = value1 * value2;

    const resultFinalMultiplicacion = await operation.create({
      value1,
      value2,
      operation: 'Multiplicacion',
      result
    });

    res.status(200).json(resultFinalMultiplicacion);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
