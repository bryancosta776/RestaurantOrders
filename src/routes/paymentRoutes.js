const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');

const paymentCtr = require('../controller/paymentController');
const array = require('../controller/arrayController');


router.post('/array', array );
router.post('/paymentIntent', authMiddleware, paymentCtr);

// router.post('/addition', validatorMiddleware(userSchemaYup), addCtrl);

module.exports = router;
