const express = require('express');

const router = express.Router();
const validator = require('../middleware/validatorMiddleware');
const errorMiddleware = require('../middleware/errorMiddleware');

router.use(express.json());

const addCtrl = require('../controller/additionController');
const subCtrl = require('../controller/subtracionController');
const multCtrl = require('../controller/multiplicationController');
const divCtrl = require('../controller/divisionController');
const regCtrl = require('../controller/registerController');
const search = require('../controller/registerParams');

router.post('/addition', validator, addCtrl);
router.post('/subtraction', validator, subCtrl) ;
router.post('/multiplication', validator, multCtrl);
router.post('/division', validator, divCtrl);
router.get('/search', regCtrl);
router.get('/searchParams', search);

router.use(errorMiddleware);

module.exports = router;

// habilitar a pesquisa por tipo de operacao
// criar um schema para a rota de lista
