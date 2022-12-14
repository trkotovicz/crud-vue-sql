const { Router } = require('express');
const userController = require('../controllers/User');

const userRouter = Router();

userRouter.post('/login', userController.login);
userRouter.post('/register', userController.register);

module.exports = userRouter;
