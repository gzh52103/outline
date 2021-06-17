const express = require('express')

const router = express.Router();


// 在这里编写的所有接口，路径都基于/user
// /api/user/login
router.get('/login',(req,res)=>{
   const {username,password} = req.query;

   // 根据用户名与密码查询数据库
    // 有结果：用户名密码正确
    // 无结果：用户名或密码不正确
    res.send({
        username,
        password,
        msg:'登录成功'
    })
})
router.post('/reg',(req,res)=>{
    // 请求体
    console.log('body=',req.body)
    res.send({
        msg:"注册才成功",
        query:req.query,
        body:req.body
    })
})
router.get('/check',(req,res)=>{
    res.send('用户可注册')
})
router.put('/modify',(req,res)=>{
    res.send('修改用于')
})


module.exports = router;