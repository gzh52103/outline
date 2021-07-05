const express = require('express');
const crypto = require('crypto')
const mongo = require('../db/mongo')
const { formatData } = require('../utils')
const router = express.Router();
const {token} = require('../utils')

router.post('/', async (req, res) => {
    let { username, password,mdl } = req.body;console.log('username&password',username,password)

    // 密码加密
    const hash = crypto.createHash('sha256');// md5:32位字符，sha256：64位字符，sha512: 128位字符
    hash.update(password);
    password = hash.digest('hex')

    const result = await mongo.find('user', { username, password })
    // console.log('result=',result)
    if (result.length > 0) {
        // 登录成功：生成token并随着用户数据返回给前端
        // const token = jwt.sign({username},'laoxie');
        let authorization = token.create({username});
        if(mdl){
            authorization = token.create({username},'7d')
        }
        // console.log('token',token);
        const data = result[0]
        data.authorization = authorization;
        res.send(formatData({data}))
    } else {
        res.send(formatData({ code: 400 }))
    }
})

module.exports = router;