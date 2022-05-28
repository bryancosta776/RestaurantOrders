const express = require('express');

const router = express.Router();

router.use(express.json());

const equationsRouterAdd = require('../controller/additionController');
const equationsRouterSub = require('../controller/subtracionController');
const equationsRouterMult = require('../controller/multiplicationController');
const equationsRouterDivi = require('../controller/divisionController');
const equationsHistory = require('../controller/registerController');

router.post('/addition', equationsRouterAdd);
router.post('/subtraction', equationsRouterSub);
router.post('/multiplication', equationsRouterMult);
router.post('/division', equationsRouterDivi);
router.get('/search', equationsHistory);
module.exports = router;