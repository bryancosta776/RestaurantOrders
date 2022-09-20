const express = require('express');

const router = express.Router();

const searchParamsSchema = require('../schemas/searchParamsSchema');

const userSchemaYup = require('../schemas/operationsSchema');

const validatorMiddleware = require('../middleware/validatorMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

router.use(express.urlencoded({ extended: true }));

router.use(express.json());

const addCtrl = require('../controller/additionController');
const subCtrl = require('../controller/subtracionController');
const multCtrl = require('../controller/multiplicationController');
const divCtrl = require('../controller/divisionController');
const searchOperations = require('../controller/getQueryController');
const webhook = require('../controller/webhookController');
const test = require('../controller/newRoutesTest');



router.post('/addition',  authMiddleware, validatorMiddleware(userSchemaYup),  addCtrl);
router.post('/subtraction', validatorMiddleware(userSchemaYup), subCtrl);
router.post('/multiplication', validatorMiddleware(userSchemaYup), multCtrl);
router.post('/division', validatorMiddleware(userSchemaYup), divCtrl);
router.get('/searchParams', validatorMiddleware(searchParamsSchema), searchOperations);
router.post('/test',  test);


router.post('/webhook', webhook);

module.exports = router;
