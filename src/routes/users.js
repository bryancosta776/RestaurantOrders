const express = require('express');

const router = express.Router();




const authMiddleware = require('../middleware/authMiddleware');


const singInUser = require('../controller/signUp');
const loginUser = require('../controller/login');
const users = require('../controller/users');


router.post('/signup', validatorMiddleware(signUpSchema), singInUser);
router.get('/login', loginUser);
router.get('/users', authMiddleware, users);


router.use(errorMiddleware);

module.exports = router;
