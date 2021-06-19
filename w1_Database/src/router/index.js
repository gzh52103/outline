const express = require('express');
const userRouter = require('./user');
const goodsRouter = require('./goods');

const router = express.Router();

router.use('/user',userRouter);
router.use('/goods',goodsRouter);

module.exports = router;