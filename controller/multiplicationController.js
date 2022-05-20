const express = require('express');

const router = express.Router();
const Yupvalidation = require('./auth');

router.post('/multiplication', Yupvalidation, (req, res) => {
    const resultFinalMultiplicaion = req.body.value1 * req.body.value2;
    res.status(200).json(resultFinalMultiplicaion);
});
module.exports = router;
