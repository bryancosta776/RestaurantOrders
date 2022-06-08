const express = require('express');

const operations = require('../models/operationsModel');
const router = express.Router();



router.get('/searchParams', async (req, res) => {
  const { operation } = req.query;
  try {
    const operationResult = await operations.find({ operation });

    res.status(200).json(operationResult);
  } catch (error) {
    res.status(400).json({ error });
  }
});



module.exports = router;
