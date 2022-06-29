const express = require('express');

const router = express.Router();

const payment = require('../controller/paymentController');

router.post('/paymentIntent', payment);

// router.post('/addition', validatorMiddleware(userSchemaYup), addCtrl);

module.exports = router;
