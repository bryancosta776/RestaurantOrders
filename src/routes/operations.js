const express = require('express');

const router = express.Router();


const userSchemaYup = require('../schemas/operationsSchema');

const validatorMiddleware = require('../middleware/validatorMiddleware');


router.use(express.urlencoded({ extended: true }));

router.use(express.json());

const addCtrl = require('../controller/additionController');
const subCtrl = require('../controller/subtracionController');
const multCtrl = require('../controller/multiplicationController');
const divCtrl = require('../controller/divisionController');
const searchOperations = require('../controller/getQuery');




router.post('/addition', validatorMiddleware(userSchemaYup), addCtrl);
router.post('/subtraction', validatorMiddleware(userSchemaYup), subCtrl);
router.post('/multiplication', validatorMiddleware(userSchemaYup), multCtrl);
router.post('/division', validatorMiddleware(userSchemaYup), divCtrl);
router.get('/searchParams', validatorMiddleware(searchParamsSchema), searchOperations);

router.use(errorMiddleware);


module.exports = router;
