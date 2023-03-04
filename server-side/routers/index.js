const express = require('express');
const authentication = require('../middleware/authentication');
const errorHandler = require('../middleware/errorHandler');
const userRouter = require('./userRouter');
const router = express.Router();

router.use('/users', userRouter);

router.use(authentication);

router.use(errorHandler);

module.exports = router;
