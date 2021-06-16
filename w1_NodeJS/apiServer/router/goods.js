const express = require('express');

// 创建路由对象
const router = express.Router()

// /api/goods
router.post('/',(req,res)=>{
    res.send('添加商品')
})

// 获取商品列表
// /api/goods/list
router.get('/list',(req,res)=>{
    res.send('获取所有商品')
})

module.exports = router;