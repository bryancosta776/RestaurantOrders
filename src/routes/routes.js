const express = require('express');

const router = express.Router();

const register = require('./registerRoutes');

const errorMiddleware = require('../middleware/errorMiddleware');

router.use(express.json());

router.use(register);

router.use(errorMiddleware);

module.exports = router;
