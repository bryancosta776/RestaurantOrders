const express = require('express');

const router = express.Router();
const validatorMiddleware = require('../middleware/validatorMiddleware');
const userSchemaYup = require('../schemas/operationsSchema');
const searchParamsSchema = require('../schemas/searchParamsSchema');
const errorMiddleware = require('../middleware/errorMiddleware');

router.use(express.json());

const addCtrl = require('../controller/additionController');
const subCtrl = require('../controller/subtracionController');
const multCtrl = require('../controller/multiplicationController');
const divCtrl = require('../controller/divisionController');
const regCtrl = require('../controller/registerController');
const searchOperations = require('../controller/getParams');

router.post('/addition', validatorMiddleware(userSchemaYup), addCtrl);
router.post('/subtraction', validatorMiddleware(userSchemaYup), subCtrl);
router.post('/multiplication', validatorMiddleware(userSchemaYup), multCtrl);
router.post('/division', validatorMiddleware(userSchemaYup), divCtrl);
router.get('/search', regCtrl);
router.get('/searchParams', validatorMiddleware(searchParamsSchema), searchOperations);

router.use(errorMiddleware);

module.exports = router;
