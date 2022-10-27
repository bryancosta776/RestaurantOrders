const express = require('express');

const router = express.Router();

const errorMiddleware = require('../middleware/errorMiddleware');

const validatorMiddleware = require('../middleware/validatorMiddleware');

const menuController = require('../controller/menuController');

const merchantController = require('../controller/merchantController');

const productController = require('../controller/productController');

const merchantSchema = require('../schemas/merchantSchema');




router.use(express.urlencoded({ extended: true }));

router.use(express.json());

router.post('/merchant', validatorMiddleware(merchantSchema), merchantController.create);

router.get('/merchant', validatorMiddleware(merchantSchema), merchantController.list);

router.post('/merchant/:merchantId/menu',  /* validatorMiddleware(menuSchema) */ menuController.create );

router.get('/merchant/:merchantId/menu/:menuId',  /* validatorMiddleware(menuSchema) */ menuController.list );

router.post('/product/:merchantId', /* validatorMiddleware(menuSchema) */ productController.create);

router.get('/product/:productId', /* validatorMiddleware(menuSchema) */ productController.list );

router.use(errorMiddleware);

module.exports = router;
