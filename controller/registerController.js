const express = require('express');

const router = express.Router();

const addition = require('./additionController');

router.get('/search', (req, res) => {
  res.json(200).json({
    addition
  });
});

module.exports = router;
