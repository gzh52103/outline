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

const allowOrigins = ['http://localhost:10086', 'http://localhost:1000']
// 快速响应OPTIONS请求
router.use(function (req, res,next) {
    console.log('options')
    const Origin = req.get('Origin');
    if (allowOrigins.includes(Origin)) {
        res.set({
            // 设置响应头
            // 'Access-Control-Allow-Origin':"http://localhost:10086",
            // 'Access-Control-Allow-Origin':"*"
            'Access-Control-Allow-Origin': Origin,
            'Access-Control-Allow-Headers': "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,token",
            'Access-Control-Allow-Methods': 'PUT,POST,GET,PATCH,DELETE,OPTIONS'

        })
        if (req.method == "OPTIONS") {
            res.sendStatus(200);
        }
    }
    next()
})

router.use('/goods', goodsRouter);
router.use('/user', userRouter);
router.use('/upload', uploadRouter);

// 跨域接口
// /api/jsonp
// jsonp接口一定要响应js代码
router.get('/jsonp', (req, res) => {
    // 查询数据库，拿到数据
    const data = { id: 1, name: 'laoxie', password: 123, role: 'admin' }
    const { cb } = req.query; // getData
    res.send(`${cb}(${JSON.stringify(data)})`)
})



router.post('/cors', (req, res) => {
    console.log('allow')
    // 如果请求为预请求，直接返回200状态码

    // 思路：获取请求源Origin，判断是否存在allowOrigins中
    // 存在：放行
    // 不存在：不允许跨域
   
    res.send({
        msg: 'cors跨域数据',
        code: 200,
        data: []
    })
})



module.exports = router;