const express = require('express');
const crypto = require('crypto')
const mongo = require('../db/mongo')
const { formatData } = require('../utils')
const router = express.Router();

router.post('/', async (req, res) => {
    let { username, password } = req.body;
    console.log('password1=',password)

    // 密码加密
    const hash = crypto.createHash('sha256');// md5:32位字符，sha256：64位字符，sha512: 128位字符
    hash.update(password);
    password = hash.digest('hex')

    console.log('password2=',password)

    const data = { 
        username, 
        password,
        regtime: new Date()
    }
    const result = await mongo.insert('user', data)
    if (result) {
        res.send(formatData())
    } else {
        res.send(formatData({ code: 400 }))
    }
})

router.get('/check',async (req,res)=>{
    const {username} = req.query;
    const result = await mongo.find('user',{username});
    if(result.length>0){
        res.send(formatData({code:400}))
    }else{
        res.send(formatData())
    }
})

module.exports = router;