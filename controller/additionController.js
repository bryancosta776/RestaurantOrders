const express = require('express');

const router = express.Router();

router.post('/addition', async (req, res, next) => {

  try {
    const { value1, value2 } = req.body;

    result = value1 + value2;

    // SALVAR RESULTADO MONGAO

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
