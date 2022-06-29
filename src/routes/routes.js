const express = require('express');

const router = express.Router();

const errorMiddleware = require('../middleware/errorMiddleware');

router.use(express.json());

const users = require('./users');

const operations = require('./operations');
const payments = require('./payment');

const regCtrl = require('../controller/registerController');

router.get('/search', regCtrl);

router.use(users);
router.use(operations);
router.use(payments);

router.use(errorMiddleware);

module.exports = router;
