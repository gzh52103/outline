const express = require('express')
const goodsRouter = require('./goods')
const userRouter = require('./user')

const router = express.Router();

router.use('/goods',goodsRouter);
router.use('/user',userRouter);


module.exports = router;