const express = require('express');

// console.log('express',express);

// 开启http服务器
const app = express();

// 开启静态资源服务器
const middleware = express.static('./public')
app.use(middleware)
// console.log('middleware',middleware)

// app.use(function(req,res,next){
//     console.log('laoxie')

//     // 进入下一个中间件
//     next()
// },function(req,res,next){
//     console.log('tiantian')
// })
// app.use(function(req,res,next){
//     console.log('ouyang')
// })

// 带路径的中间件
// 路由匹配/test时，才能进入中间件
app.use('/test',function(req,res,next){
    console.log('test middleware')

    // res.write(JSON.stringify({a:10,b:20}))
    // res.end('中间件')
    res.send({a:10,b:20})
    // res.send('hello 中间件')
})

// 定义路由，编写数据接口
// use()：任意请求都会进入
app.get('/goodslist',(req,res)=>{
    let goodslist = []
    for(let i=0;i<10;i++){
        const goods = {
            id:parseInt(Math.random()*10000),
            name:'goods'+i,
            price: parseInt((Math.random()*1000-100)+100),
            imgurl:'img/goods'+i + 'jpg'
        }
        goodslist.push(goods);
    }

    res.send(goodslist);
})
app.post('/reg',(req,res)=>{
    res.send('注册成功')
})
app.post('/goods',(req,res)=>{
    res.send('添加商品')
})
app.put('/goods',(req,res)=>{
    res.send('修改商品成功')
})
app.patch('/goods',(req,res)=>{
    res.send('修改商品部分属性成功')
})
app.delete('/goods',(req,res)=>{
    res.send('删除商品成功')
})

// 监听端口
app.listen(2103,()=>{
    console.log('服务器启动成功')
})