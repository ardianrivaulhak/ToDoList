const UserController = require('../controllers/UserController');
const userRouter = require('express').Router();

userRouter.get('/read', UserController.readAllUser);
userRouter.post('/create', UserController.createUser);
userRouter.post('/login', UserController.loginUser);

module.exports = userRouter;
