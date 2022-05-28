const express = require('express');

const router = express.Router();

router.post('/multiplication', (req, res) => {
  try {
    const resultFinalMultiplicaion = req.body.value1 * req.body.value2;
    res.status(200).json(resultFinalMultiplicaion);
  } catch {
    res.status(400).json(req.err);
  }
});
module.exports = router;
