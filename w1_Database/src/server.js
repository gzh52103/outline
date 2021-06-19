const express = require('express');

const router = require('./router')

const app = express();

app.use(express.static('./public'))

app.use('/api',router)

app.listen(2103,()=>{
    console.log('服务器启动成功')
})