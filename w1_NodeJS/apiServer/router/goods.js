const express = require('express');

// 创建路由对象
const router = express.Router()

// /api/goods
router.get('/',(req,res)=>{
    console.log('username=',req.get('username'))
    const userAgent = req.get('User-Agent');
    console.log('User-Agent=',userAgent)
    if(/windows/i.test(userAgent)){
        res.send('PC添加商品')
    }else if(/iphone/i.test(userAgent)){
        res.send('iphone添加商品')
    }else if(/android/i.test(userAgent)){
        res.send('android添加商品')
    }
})


// 获取商品列表
// /api/goods/list
router.get('/list',(req,res)=>{
    res.send('获取所有商品')
})

// 获取单个商品信息（动态路由）
// /api/goods/:id
// /api/goods/3
router.get('/:id/:type?',(req,res)=>{
    console.log('req.params',req.params)
    res.send('动态路由')
})

module.exports = router;