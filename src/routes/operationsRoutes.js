const express = require('express');

const router = express.Router();

/* const searchParamsSchema = require('../schemas/searchParamsSchema');

/* const userSchemaYup = require('../schemas/operationsSchema');

const validatorMiddleware = require('../middleware/validatorMiddleware'); */
/* const authMiddleware = require('../middleware/authMiddleware') ; */

router.use(express.urlencoded({ extended: true }));

router.use(express.json());

const webhook = require('../controller/webhookController');







router.post('/webhook', webhook);

module.exports = router;
