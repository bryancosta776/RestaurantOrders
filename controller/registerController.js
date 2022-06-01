const express = require('express');

const router = express.Router();

const resultCalculator = require('../models/config/resultCalculator');

router.get('/search', async (req, res) => {
  try{
    const getResults = await resultCalculator.find({ });

    res.status(200).json(getResults);
  }catch (error){
    res.status(400).json({ error: error });
  }

});

module.exports = router;
