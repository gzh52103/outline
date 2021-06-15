/**
    * 利用NodeJs创建一个服务器
    * 实现静态资源服务器
        > 根据不同的请求地址响应不同的内容
 */
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const mime = require('./mime')

const tt = require('./module/tiantian');
const lx = require('./module/laoxie');
const mod = require('./module');
console.log('tt=',tt);
console.log('lx=',lx);
console.log('mod=',mod);

// 创建服务器
// const server = http.createServer((request,response)=>{
//     // request：请求对象，保存客户端发来的信息
//     // response：响应对象，可以给客户端响应内容

//     response.write('hello')
//     response.write('laoxie')
//     response.end()
// })

// 静态资源服务器
const server = http.createServer((req, res) => {
    
    // 获取请求静态资源文件的路径
    const { pathname } = url.parse(req.url)
    console.log('url=', req.url, pathname);

    if(pathname === '/favicon.ico'){
        res.end()
        return;
    }

    // 获取文件后缀名
    const ext = path.extname(pathname).substring(1);

    // 转成平台地址（真实地址） /style.css -> F:\ss\sd\sd\style.css
    // __dirname: F:\mydoc\kphone\class\gz_h5_2103\w1_NodeJS\src
    // __filename: F:\mydoc\kphone\class\gz_h5_2103\w1_NodeJS\src\server.js
    const realPath = path.join(
        __dirname,
        ext==='html' ? '' : 'assets',
    pathname)
    console.log('realPath=',realPath)

    // 利用fs模块读取文件内容，并返回给前端
    fs.readFile(realPath,(err,content)=>{
        // content: 读取文件的内容，为一个Buffer（二进制内容）
        if(err){
            res.writeHead(404);
            res.end('404')
        }else{
            // 设置状态码与响应头
            res.writeHead(200,{
                'Content-Type':`${mime[ext]};charset=utf-8`
            })
            res.end(content)
        }
    })
})

// 监听端口
server.listen(2103, () => {
    console.log('server is running at port 2103')
})

