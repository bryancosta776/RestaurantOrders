const express = require('express');

const router = express.Router();
const validator = require('./auth');

router.post('/multiplication', validator, (req, res) => {
    try {
        const resultFinalMultiplicaion = req.body.value1 * req.body.value2;
        res.status(200).json(resultFinalMultiplicaion);
    } catch {
        res.status(400).json(req.err);
    }
});
module.exports = router;
