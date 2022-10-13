const express = require('express');

const router = express.Router();

const errorMiddleware = require('../middleware/errorMiddleware');

router.use(express.json());




router.use(errorMiddleware);

module.exports = router;
