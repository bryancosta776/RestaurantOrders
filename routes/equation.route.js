const express = require('express');

const router = express.Router();

router.use(express.json());

const equationsRouterAdd = require('../controller/equationAdditionController');
const equationsRouterSub = require('../controller/equationSubtracionController');
const equationsRouterMult = require('../controller/equationMultiplicationController');
const equationsRouterDivi = require('../controller/equationDivisionController');

router.post('/addition', equationsRouterAdd);
router.post('/subtraction', equationsRouterSub);
router.post('/multiplication', equationsRouterMult);
router.post('/division', equationsRouterDivi);

module.exports = router;
