const express = require('express')
const goodsRouter = require('./goods')
const userRouter = require('./user')
const uploadRouter = require('./upload')

const router = express.Router();

router.use(
    express.urlencoded({extended:true}),
    express.json(),
    express.raw()
)

router.use('/goods',goodsRouter);
router.use('/user',userRouter);
router.use('/upload',uploadRouter);



module.exports = router;