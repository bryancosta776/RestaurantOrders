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


router.post('/addition',  authMiddleware, validatorMiddleware(userSchemaYup),  addCtrl);
router.post('/subtraction', authMiddleware, validatorMiddleware(userSchemaYup), subCtrl);
router.post('/multiplication', authMiddleware, validatorMiddleware(userSchemaYup), multCtrl);
router.post('/division', authMiddleware, validatorMiddleware(userSchemaYup), divCtrl);
router.get('/searchParams', authMiddleware, authMiddlewarevalidatorMiddleware(searchParamsSchema), searchOperations);



router.post('/webhook', webhook);

module.exports = router;
