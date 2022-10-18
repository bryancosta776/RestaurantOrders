const express = require('express');

const router = express.Router();

const menuController = require('../controller/menuController');

/* const menuSchema = require('../schemas/menuSchema');

const validatorMiddleware = require('../middleware/validatorMiddleware'); */

router.use(express.urlencoded({ extended: true }));

router.use(express.json());

router.post('/menu/',  /* validatorMiddleware(menuSchema) */ menuController );


module.exports = router;
