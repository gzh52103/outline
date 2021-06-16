const express = require('express')

const router = express.Router();

// 在这里编写的所有接口，路径都基于/user
// /api/user/login
router.get('/login',(req,res)=>{
    res.send('登录成功')
})
router.post('/reg',(req,res)=>{
    res.send('注册成功')
})
router.get('/check',(req,res)=>{
    res.send('用户可注册')
})
router.put('/modify',(req,res)=>{
    res.send('修改用于')
})


module.exports = router;