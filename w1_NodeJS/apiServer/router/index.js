const express = require('express')
const goodsRouter = require('./goods')
const userRouter = require('./user')
const uploadRouter = require('./upload')

const router = express.Router();

router.use(
    express.urlencoded({ extended: true }),
    express.json(),
    express.raw()
)

router.use('/goods', goodsRouter);
router.use('/user', userRouter);
router.use('/upload', uploadRouter);

// 跨域接口
// /api/jsonp
// jsonp接口一定要响应js代码
router.get('/jsonp', (req, res) => {
    // 查询数据库，拿到数据
    const data = {id:1,name:'laoxie',password:123,role:'admin'}
    const { cb } = req.query; // getData
    res.send(`${cb}(${JSON.stringify(data)})`)
})



module.exports = router;