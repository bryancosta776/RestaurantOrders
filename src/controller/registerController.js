const express = require('express');

const router = express.Router();

const operationsModel = require('../models/operationsModel');

router.get('/search', async (req, res) => {
  try{
    const getResults = await operationsModel.find();

    res.status(200).json(getResults);
  }catch (error){
    res.status(400).json({ error });
  }

});

module.exports = router;
