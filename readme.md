# 三阶段课程

## day1-1

* 三阶段课程介绍
* 学习方式
    * 笔记整理
    * 代码量
        ```js
            // 商品数量
            let qty = 10;
            function show(){
                return {
                    a:10,
                    b:20
                }
            }
        ```
    * 提高查看文档的能力
        * 技术文档
        * 需求文档
    * 独立思考
* 利用NodeJS实现一个静态资源服务器
    * 静态资源：img,js,css,html,font等
    * 依赖模块
        * fs
        * http
        * url
        * path
    * mime类型：告诉浏览器响应的额内容是什么
         > 一般设置在`Content-Type`响应头中
        * text/palin    纯文本
        * text/html     html代码
        * text/css      css代码
        * image/jpeg  jpeg图片
        * image/png     png图片
* 请求request与响应response
* 前端js与后端js
    * 前端js：通过script标签引入，在浏览器中解析
    * 后端js：在nodejs中解析

* 自动重启服务器
    * supervisor
    * nodemon
    * pm2
    * ...
* 模块化
    > 模块化就是把一个大的东西拆分成若干小的部件
    * 优点
        * 灵活复用
        * 维护方便
        * 合理分工
    * 模块化开发规范
        * commonJS      NodeJS（后端）
        * ESModule      ES6（ES2015，前端）
        * AMD           require.js（前端）
        * CMD           sea.js（前端）
    * 分类
        * 内置模块
            * 自带模块，不需要安装
        * 自定义模块
            > 自己编写的模块
        * 第三方模块
            > 需要安装
    * 导出
        * commonJS: 
            * `module.exports`
    * 引入
        * commonJS: `require()`

## day1-2

### 复习
* 静态资源服务器
    > 根据不同的请求响应相应的内容
    * http
    * url
    * path
    * fs

* 请求与响应
    * request
    * response
    * 请求头request header
    * 响应头reponse header

* 模块化开发
    * 优点
        * 复用
        * 维护
        * 分工
    * 规范
        * AMD
        * CMD
        * ESModule      前端
        * CommonJS      后端
    * 分类
        * 内置模块（原生模块）
        * 自定义模块
        * 第三方模块
            > npm install moduleName
    * 使用
        * 导入（引用）
            * require()
        * 导出（暴露）
            * module.exports
### 知识点
* 模块引入流程
    > 都是引入一个js文件
    ```js
        // 引入内置模块
        const fs = require('fs');

        // 引入自定义模块
        const mime = require('./mime');

        // 引入目录
        const md = require('./module')

        // 引入第三方模块
        const gulp = require('gulp')
    ```
    * package.json  模块配置文件
        > 当require一个目录时，先查找当前目录下是否存在该配置文件
        * 属性
            * main
            * module
            * dependencies
            * devDependencies
        * npm install
            > 安装package.json下dependencies与devDependencies下的所有模块
        * npm install --production
            > 安装package.json下dependencies的所有依赖

* express/koa
    
* 安装模块
    * 安装最新正式版：
        * npm install express
        * yarn add express
    * 安装指定版本：npm install express@3.21.2
    * 安装下一个版本：npm install express@next
    * 安装所有依赖
        * npm install
        * yarn
* 模块卸载
    * npm uninstall express
    * yarn remove

* 利用express实现静态资源服务器
    ```js
        const app = express();
        app.use(express.static('./public'))
        app.listen(2103)
    ```
* express中间件middleware
    * 定义：express中间件是一个封装了某些处理数据功能的函数
    * 使用：
        * `app.use(middleware)`   所有的请求都会进入中间件
        * `app.use(path,middleware1,middleware2,...)`  请求地址匹配path时，进入中间件
    * 分类
        * 内置中间件        express自带的中间件
        * 自定义中间        自己编写的中间件
        * 第三方中间件      需要下载安装
    * 定义
        > 中间件是一个函数，接收request,response,next作为参数

    * 应用
        * 编写接口（定义路由）
            > 语义化
            * RESTful接口规范：利用请求类型与请求路径的不同实现相应的数据接口
            * 请求类型：CRUD
                * get       查
                * post      增
                * put       改（全部修改）
                * patch     改（部分修改）
                * delete    删
            
* postman
* 利用模块化思想编写数据接口（重点）
    * 要点
        * 模块      ： commonJS
        * RESTful   : post,delete,put/patch,get
        * 中间件    : express.Router()

* 练习：创建一个服务器，实现以下接口
    * 注册
    * 登录
    * 检测用于名是否被占用
    * 商品列表
    * 商品详情（单独一个商品）
    * 用户列表
    * 用户详情（单独一个用户）

## day1-3

### 复习
* express中间件
    * 内置
        * express.static()
        * express.Router()
        * express.urlencoded()
        * express.json()
        * express.raw()
        * express.text()
            > 依赖一个第三方模块body-parser

### 知识点
* 接收参数
    * 请求url参数传递： `api/user?id=123`
        > 只能传递字符类型数据，接收：`req.query`
    * 动态路由: `api/user/:id`
        > 路径为变量的路由，接收方式：`req.params`，动态路由必须放在所有路由的后面
    * 请求体传参
        > 可以传任意类型数据，接收方式：`req.body`
        * 通过请求体可以传递多种类型的数据，需要手动调用中间件把数据格式化到req.body
            * x-www-form-urlencoded: express.urlencoded()
            * json : express.json()
            * raw: express.raw()
            * text: express.text()
        * 非文本类型
            * 后端：multer 格式化数据到req.file,req.files
            * 前端：
                * form表单
                * FormData
    * 请求头 request header
        * 接收方式：`req.get(key)`

## day1-4

### 面试题
* js中的数据类型有哪些，如何判断是哪种类型
    * 基本数据类型（栈）
        * Number
        * String
        * Boolean
        * Undefined
        * Null
        * Symbol
        * BigInt
    * 引用数据类型（堆）
        * Object

        ```js
            var a = 10;
            var b = a;

            let a = {a:10,b:20}
            let b = a;
        ```
    * typeof判断基本数据类型
    * Object.prototype.toString
        ```js
            a.toString()
            Object.prototype.toString.call(a)
            Array.isArray()
        ```
* 报错：`cannot read the property xxx of undefined`
    > 不能读取undefined的xxx属性
    * xxx前端的对象为undefined
* 如何判断两个对象是否一样
    ```js
        var a = {name:'123',age:18}
        var b = {name:'123',age:19}

        JSON.stringify(a) === JSON.stringify(b)
        Object.keys()/Object.values()
    ```
* git常用命令有哪些
    * git add
    * git commit
    * git push
    * git pull => git fetch + git merger
    * git clone
    * git status
    * git reset
    * git log
    * git reflog
    * ....
    * 删除暂存区中的文件
        - `git rm --cache <file>`：撤销暂存区的修改
        - `git reset HEAD <file>`：撤销暂存区的修改


### 知识点
* 跨域解决方案
    * jsonp     json with pending
        * 缺点：不是ajax请求而是script请求，只能使用get
    * CORS      cross origin resource sharing
        * 核心: 设置响应头
        * Access-Control-Allow-Origin: 值为`单个域名`或`*`
        * Access-Control-Allow-Methods: 
            * OPTIONS   预请求
        * Access-Control-Allow-Headers: 

    * 服务器代理
        > 一般用于临时解决方案，使用`http-proxy-middleware`中间件
* 复杂跨域
    * 非GET、HEAD、POST请求。
    * POST请求的Content-Type不是`application/x-www-form-urlencoded`, `multipart/form-data`, 或`text/plain`。
    * 添加了自定义header，例如Token。

* 练习
    * 找一个网站，代理这个网站所有的接口，并成功请求回数据

## day1-5

### 复习
* JSONP
* CORS
    * 允许多一个域名跨域访问
    * 复杂跨域
        * options预请求
* 服务器代理
    > http-proxy-middleware

### 知识点
* 页面渲染模式
    * 客户端渲染（BSR: Broswer Side Rendering）：
        > 页面开始是空的，通过ajax把数据请求回来，然后在客户端生成html结构，并写入页面
        * 优点
            * 前后端分离
            * 局部刷新
            * 用户体验
        * 缺点
            * SEO不友好
        * 请求步骤
            1. 请求html文件（空的html）
            2. 请求js文件，解释js代码
            3. 发起ajax请求
            4. 拿到数据生成html结构并写入页面
    * 服务器渲染（SSR: Server Side Rendering）
        > 在服务器生成html结构并响应到前端
        * 优点
            * SEO友好
            * 速度快
        * 缺点
            * 不能局部刷新
            * 用户体验不好
        * 请求步骤
            1. 请求html文件（html内容在服务器生成，页面静态化）
            2. 拿到html内容并渲染到页面

* 爬虫
    > 分析html结构，提取需要的信息
    * 操作步骤
        1. 请求所有html内容
        2. 筛选所需要的内容
        3. 生成json数据
        4. 写入数据库
        5. 下载图片到本地
    * 常用模块
        * request
        * cheerio

* fs模块
    * 操作目录
    * 操作文件
        * 读取
        * 写入
    * Stream
        > 文件的液体状态，在文件操作过程中，如果不确定文件有多大，尽量采用文件流的方式来进行操作
        * 读取流
            ```js
                const readerStream = fs.createReadStream('tiantian.avi')

                data = []

                // 文件分10次读取，每次会触发一次data事件
                readerStream.on('data', function(chunk) {
                    data.push(chunk)
                });

                readerStream.on('end',function(){
                    console.log(data);
                });
            ```
        * 写入流
            ```js
                var writerStream = fs.createWriteStream('test.txt');

                // 使用 utf8 编码写入数据
                writerStream.write(data,'UTF8');

                // 标记文件末尾
                writerStream.end();

                // 处理流事件 --> data, end, and error
                writerStream.on('finish', function() {
                    console.log("写入完成。");
                });

                writerStream.on('error', function(err){
                    console.log(err.stack);
                });

            ```
        * 管道流
            ```js
                var fs = require("fs");

                // 创建一个可读流
                var readerStream = fs.createReadStream('input.txt');

                // 创建一个可写流 
                var writerStream = fs.createWriteStream('output.txt');

                // 管道读写操作
                // 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
                readerStream.pipe(writerStream);
            ```
    * 练习：读取本地相册，并显示到页面
        > 配合img,audio,video实现图片与视频的预览

* 数据库
    * mysql
        * 安装mysql
        * 安装驱动: mysql
        * 封装查询数据库方法
        * 拼接sql语句
* 练习
    * 找一个网站，
    * 把网站地址填写到 https://docs.qq.com/sheet/DR21talV1a3NKS29G
    * 爬取它的数据（包括图片），并写入mysql数据库
    * 编写数据接口，实现数据的CRUD

## day2-1

### 面试题
* promise如何实现链式调用
    > 在每个then中返回一个新的promise对象
    ```js
        // ajax
        ajax(url,function(data){
            // 30 rows
            ajax(url2,function(data2){
                // 20 rows
                ajax(url3,function(data3){
                    // ...
                })
            })
        })
        new Promise((resolve,reject)=>{

        }).then(res=>{
            return promise
        }).then(()=>{
            return promise
        }).then() 

        const pro2 = await pomise1
        const pro3 = await pro2;
    ```
* 防抖与节流
    * 滚动加载（页面懒加载） 节流优化（保留第一次，忽略后面所有操作）
    * 动画，搜索建议         防抖优化（保留最后一次，忽略前面所有操作）
* 通过jQuey获取到的元素与通过原生js获取到的元素有什么区别
    > 它们处在不同的原型中
    * getElementsByTagName()与querySelectorAll()区别
        > nodeList与HTMLCollection的区别
* jQuery中的arrt()与prop()的区别
    * attr()   设置html元素属性
    * props()   设置节点属性
    ```js
        <div></div>
        <img>

        // 等效于原生js中的setAttribute('id','box')
        $('div').attr('id','box') 

        // 等效于原生js中的点语法div.id='box'
        $('div').prop('id','box') 

        // 设置节点属性(如果这个属性是全局属性或私有属性，则影响html属性)
        div.username = 'laoxie'
        $('div').props('username','laoxie')

        // 设置html属性(如果这个属性为全局属性或私有属性，则影响节点属性)
        div.setAttibute('age',18)
        $('div').attr('age',18)
    ```
* 如何监听用户关闭页面事件
    * beforeunload

### 复习
* 在nodejs中操作mysql
    > 安装**驱动**：mysql
    * mySQL与驱动
        * mySQL为数据库，需要安装到电脑中
        * 驱动：为了在某些语言中使用mySQL而安装的工具
            ```
                npm install mysql
            ```


### 知识点
* mongodb
    * 安装
    * 配置
        * 服务
        * 环境变量
    * 使用
        * 命令行
            * 数据库操作
            * 集合操作
            * 文档操作：CRUD
        * 可视化工具：robo3T
* NodeJS中使用mongodb
    * 安装驱动: 
        * 官方驱动：mongodb
        * mongoose
    * 使用步骤
        1. 连接mongoDB
            ```js
                MongoClient.connect(url,callback)
            ```
        2. 连接数据库
            ```js
                MongoClient.connect(url,(err,client)=>{
                    const db = client.db('laoxie')
                })
            ```
        3. 获取集合
            ```js
                 MongoClient.connect(url,(err,clicent)=>{
                    const db = client.db('laoxie')
                    const col = db.collection('goods')
                })
            ```
        4. 文档的CRUD

## day2-2

### 知识点
* 封装mongodb的增删改查
    * find(colName,query)
        ```js
            find('user')
            find('user',{age:18});

            find('goods',{price:{$gt:100}})
            // 假设共有100条数据，现在需要获取前10条
            find('goods',{},{limit:10})
            // 获取第2页的10条
            find('goods',{},{skip:10,limit:10})
        ```
    * insert(colName,data)
    * remove(colName,query)
    * update(colName,query,newData)
* 统一前后端数据交互格式：json
    ```js
        {
            code,   // 状态码：200成功，400失败
            data,   // 数据
            msg,    // 提示信息
        }
    ```
* 注册登录效果
    > 利用bootstrap实现页面UI效果
* 作业
    > 实现用户注册效果

## day2-3

### 面试题
* cookie与webStorage（localStorage+sessionStorage）存满了如何解决
    > cookie 4K，webStorage 5M 指的是每个域的容量大小
    ```js
        http://laoxie.com

        http://qf.laoxie.com
        http://gz.laoxie.com
    ```
    * 方案一：利用其他二级域名存储数据，并利用postMessage实现通讯
    * 方案二: IndexedDB 或 webSQL
* 如何给对象设置一个不可修改的属性
    * Object.defineProperty(target,key,descriptor)   设置属性特性
    * Object.defineProperties(target,{key:descriptor})   设置多个属性的属性特性
    * Object.getOwnPropertyDescriptor() 获取属性特性
    ```js
        const obj = {
            name:'laoxie', // 传统添加属性方式，所有属性特性为true
        }
        // symbol
        const s = Symbol('age')
        obj[s] = 18;

        // 属性特性: 
        // configurable 可配置性（为其他属性特性的总开关）
        // writable     可写性
        // enumerable   可枚举性（可遍历）
        // Object.defineProperty(target,key,descriptor)，利用这个方式添加的属性，所有属性特性默认为false
        obj.age = 18;
        Object.defineProperty(obj,'age',{
            // writable:false, // 设置该属性不可写
            enumerable:true,
            value:18
        })

    ```

## 知识点
* 登录页面
* 注册页面
* 加密与解密
    * 单向加密
        > 加密后不可解密，但可以暴力破解
        * 限定输入密码次数
        * 加盐
        * 多次加密
    * 双向加密 
        > 可以解密操作
        * 对称加密
            > 加密与解密同用一把钥匙
        * 非对称加密
            > 加密和解密使用不同的钥匙（公钥、私钥）

        * https
            * ssl 证书

* webSocket
    * 客户端
        > WebSocket
        ```js
            const socket = new WebSocket(url);

            // 客户端->服务端
            socket.send(msg)

            // 接收消息
            socket.onmessage = function(e){
                console.log(e.data)
            }
        ```
    * 服务端
        * ws模块
        ```js
            // 监听客户端发送的消息
            client.on('message',()=>{

            })
            // 服务器->客户端
            client.send(msg)
        ```