const express = require('express');

console.log('express',express);

// 开启http服务器
const app = express();

// 开启静态资源服务器
app.use(express.static('./public'))

// 监听端口
app.listen(2103,()=>{
    console.log('服务器启动成功')
})