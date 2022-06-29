const express = require('express');

const router = express.Router();

const errorMiddleware = require('../middleware/errorMiddleware');
const validatorMiddleware = require('../middleware/validatorMiddleware');

const authMiddleware = require('../middleware/authMiddleware');

const signUpSchema = require('../schemas/signUpSchema');

const singInUser = require('../controller/loginController/signUp');
const loginUser = require('../controller/loginController/login');
const users = require('../controller/loginController/users');


router.post('/signup', validatorMiddleware(signUpSchema), singInUser);
router.get('/login', loginUser);
router.get('/users', authMiddleware, users);


router.use(errorMiddleware);

module.exports = router;
