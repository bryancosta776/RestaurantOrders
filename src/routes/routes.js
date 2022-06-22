const express = require('express');

const router = express.Router();

const errorMiddleware = require('../middleware/errorMiddleware');

router.use(express.json());


const users = require('./users');

const operations = require('.operations');

const regCtrl = require('../controller/registerController');


router.get('/search', regCtrl);

router.get(users);
router.get(operations);

router.use(errorMiddleware);

module.exports = router;
