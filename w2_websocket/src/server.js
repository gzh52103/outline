const ws = require('ws')
const http = require('http');
const express = require('express')

// 创建express服务器
const app = express();
app.use(express.static('../public'))
// app.listen(2103,()=>{
//     console.log('web服务器启动成功')
// })

// 利用http连接express
let server = http.Server(app);

// 必须使用http模块创建的服务器来监听端口
server.listen(2103,()=>{
    console.log('web server and websocket are runing');
})

// 创建websocket服务器
let wss = new ws.Server({
    // 利用http连接socket服务器
    server,
    // port: 1001
});

wss.on('connection',(client)=>{
    // client: 客户端对象
    console.log('客户端连接')
    // 监听客户端发送消息
    client.on('message',(msg)=>{
        console.log('msg=',msg);

        // client.send(msg.repeat(2))

        // 转发消息给所有客户端
        wss.clients.forEach(item=>{
            item.send(msg);
        })
    })
})

console.log('websocket服务器启动成功')