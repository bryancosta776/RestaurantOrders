const express = require('express');

const router = express.Router();

const registerController = require('../controller/registerController');

const validatorMiddleware = require('../middleware/validatorMiddleware');

const registerSchema = require('../schemas/registerSchema');

router.use(express.urlencoded({ extended: true }));

router.use(express.json());

router.post('/register', validatorMiddleware(registerSchema), registerController);



module.exports = router;
