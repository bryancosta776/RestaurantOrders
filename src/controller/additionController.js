const express = require('express');

const router = express.Router();

const operations = require('../models/operationsModel');


router.post('/addition', async (req, res, next) => {

  try {
    const { value1, value2 } = req.body;

    resultAdd = value1 + value2;

    const resultFinalAdditio = await operations.create({
       value1: value1,
       value2: value2,
       operation: 'Addition',
       result: resultAdd
      });

    res.status(200).json({ resultFinalAdditio });
    next();

  } catch (error) {
    next(error);
  }
});

module.exports = router;
