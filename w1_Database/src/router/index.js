const express = require('express');
const userRouter = require('./user');
const goodsRouter = require('./goods');
const loginRouter = require('./login');

const router = express.Router();

router.use(express.urlencoded({ extended: true }), express.json())

router.use('/user', userRouter);
router.use('/goods', goodsRouter);
router.use('/login', loginRouter);

module.exports = router;