const ws = require('ws')
const express = require('express')

const app = express();
app.use(express.static('../public'))
app.listen(2103,()=>{
    console.log('web服务器启动成功')
})

// 创建websocket服务器
let wss = new ws.Server({
    port: 1001
});

wss.on('connection',(client)=>{
    // client: 客户端对象
    console.log('客户端连接')
    // 监听客户端发送消息
    client.on('message',(msg)=>{
        console.log('msg=',msg);

        client.send(msg.repeat(2))
    })
})

console.log('websocket服务器启动成功')