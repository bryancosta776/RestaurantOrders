const express = require('express');

const router = express.Router();
const validator = require('../controller/validator');
const errorMiddleware = require('../controller/errorMiddleware');

router.use(express.json());

const addCtrl = require('../controller/additionController');
const subCtrl = require('../controller/subtracionController');
const multCtrl = require('../controller/multiplicationController');
const divCtrl = require('../controller/divisionController');
const regCtrl = require('../controller/registerController');

router.post('/addition', validator, addCtrl);
// router.post('/subtraction', subCtrl);
// router.post('/multiplication', multCtrl);
// router.post('/division', divCtrl);
// router.get('/search', regCtrl);

router.use(errorMiddleware);

module.exports = router;
