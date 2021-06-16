const express = require('express');
const router = require('./router')

const app = express();

app.use(express.static('./public'));

// 数据接口
app.use('/api',router);

// 端口范围：2^16
app.listen(2103,()=>{
    console.log('服务器启动成功')
})