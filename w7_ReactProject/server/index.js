const express = require('express');
const compression = require('compression')
const app = express();

// 启动服务器压缩
app.use(compression())

app.use(express.static('./public'))

app.listen(2103,()=>{
    console.log('server is running')
})