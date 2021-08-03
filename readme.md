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
    > websocket为**长连接**，**服务器可以主动**发送消息
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
* 不支持websocket的浏览器如何实现类似效果
    * 轮询：利用定时器不断向服务器发起请求并得到最新数据


## day 2-4

### 知识点
* 前端框架/库发展历程
    1. jQuery
    2. Angular
    3. React
    4. Vue
* Vue版本
    * 按环境分
        * 开发版本: development
            > 在开发解决使用的版本，未压缩，方便调试与测试
        * 生产版本：production
            > 上线后的版本，特点：压缩
    * 按构建版本分
        * 完整版: 运行时（runtime）版 + 编译器
            > 包含所有功能的版本
        * 运行时版本：runtime
    * 按模块类型分
        * common: commonJS
        * esm: ESModule
        * umd：通用模块（支持AMD,commonJS,全局引入等方式引用）

* Vue的使用
    1. 实例化Vue: Controller
    2. 关联视图：View
    3. 关联数据: Model

* 分层
    * MVC
        * M: Model数据层
        * V: View视图层
        * C: Controller控制层
    * MVP
    * MVVM
        * M: Model数据层
        * V: View视图层
        * VM: ViewModel控制层
            > 双向数据绑定

* 数据绑定
    > 把数据绑定到视图层，
    * 单向绑定
        * {{}}
    * 双向绑定
        * v-model

* 指令： html属性
    * v-model: 双向绑定
        * Model -> View: 数据层的改变会影响视图层
        * View -> Model: 视图层改变影响数据层

* 属性特性
    * 值属性：拥有值的属性
        * configurable  可配置性
        * enumerable    可枚举性
        * writable      可写性
        * value         值
    * 存储器属性
        > 本身并没有值，一般用于代理其他的值
        * configurable  可配置性
        * enumerable    可枚举性
        * get
        * set
* 搞懂几个问题
    * Vue的响应式属性原理？
        > getter&setter
    * 数据层中的属性是怎么变成响应式属性并写入vm实例中的？
        > 实例化Vue时，Vue会遍历data中所有的属性，利用`Object.defineProperty(target,key,discriptor)`方法把它们变成getter&setter，并写入vm实例
    * Vue中如何设置响应式属性
        > 响应式属性特点：被修改时自动刷新页面
        * 初始化时写入data
        * `Vue.set(target,key,value)`
            > 适用于对象或数组，target对象不能是 Vue 实例，或者 Vue 实例的根数据对象
        * 数组特定方法
            > Vue利用原型链重写部分数组方法，让这些方法实现响应式
            * push()
            * pop()
            * shift()
            * unshift()
            * splice()
            * sort()
            * reverse()

## day2-5

### 复习
* 了解Vue
    * 发展历程
    * 作者
* 架构分层
    * MVC       angular
    * MVP
    * MVVM
* 响应式属性
    * 属性特性
        * 值属性
        * 存储器属性（getter&setter）
            > 可监听属性的读取与修改操作
    * 特点：
        * 数据修改会自动刷新视图
    * 如何设置响应式属性
        * 初始化设置data
        * Vue.set(target,key,value)
        * 变更方法
            > Vue利用原型链重写部分数组方法，让这些方法实现响应式
* 数据绑定
    > 把数据层中的数据绑定到视图层
    * 单向
    * 双向

### 知识点
* 绑定数据
    * 单向
        * 绑定数据到标签内
            * {{}}      
            * v-text    等效于innerText
            * v-html    等效于innerHTML
        * v-bind    绑定数据到标签属性
    * 双向
        * v-model
* 指令
    * v-model   双向数据绑定
    * v-for     列表循环
        > v-for可以遍历Array,String,Number,Object等
        * `(item,idx) in data`
        * `item of data`
    * v-bind    绑定数据到属性
        > 只有class、style属性才支持数组与对象写法
    * v-text
    * v-html
    * v-show    是否显示
    * v-on      绑定事件

* 在Vue使用过程中，要注意思维模式的改变
    * 以前：节点操作思维
    * 现在：数据驱动（通过改变数据达到节点操作的目的）

* 事件绑定
    > 格式：v-on:事件类型.修饰符="事件处理函数"，简写：@事件类型="事件处理函数"
    * 传参
        > v-on:click="change(10)"
    * event
        > 事件处理函数的第一个参数
        * 传参并获取event对象
        ```js
            <button @click="change($event,10)" />
        ```
    * 修饰符
* ref

* 配置选项
    * el        元素
    * data      数据
    * methods   方法
    * computed  计算属性

## day3-1

### 复习
* 架构分层
    * MVC
    * MVP
    * MVVM
* 配置选项
    * el
    * data
    * methods
    * computed  计算属性（需要运算后才得到的值）
        * 监听
        * 缓存：依赖的数据发生改变时重新执行计算属性中的代码，否则得到缓存之
    * props
* 全局方法（静态方法）
    * Vue.set()     设置响应式属性
    * Vue.delete()  删除响应式属性
* 实例方法
    * $set()        Vue.set的别名
    ```js
        vm.$set();
        this.$set();
    ```
    * $emit()       手动触发事件    
    * $on()         绑定事件
        > 与v-on一致
    * $off()        移除事件
* 实例属性
    * 内置属性
    * 实例化时写入的属性（data,computed,methods等）

* 响应式属性
    > 当属性有修改时，自动刷新视图（原理：getter&setter）
    * 如何设置响应式属性
        * 初始化
        * Vue.set()
* 数据绑定
    * 单向绑定：数据层修改影响视图层
        * {{}}
        * v-bind
        * v-text
        * v-html
    * 双向绑定
        * v-model
* 指令
    * v-for
    * v-bind
    * v-on
    * v-show
    * v-html
    * v-text
    * v-model

### 知识点
* 组件
    > 定义一个组件，就相当于创建一个标签
    * 优点
        * 复用
        * 分工
        * 维护
    * 定义
        > 定义组件必须才作用符合W3C标准的字符
        * 全局组件：可在任意地方使用
            > Vue.component()
        * 局部组件：只能在定义它所在的组件中使用（组件所在的视图）
            > components
    * 使用组件
        > 定义时使用驼峰，使用时要改成横杠小写模式：`todoHead -> <todo-head>`

* 组件化Todolist
    * 定义组件
        * TodoList
        * TodoHead
        * TodoBody
            * TodoItem
        * TodoFoot
    * 设置数据与方法
        > 谁的数据谁修改原则：把修改数据的方法定义在数据所在的组件
    * 增删改查CRUD
        * 查：显示数据

* 组件通讯
    * 父->子：props
        1. 父组件操作：给子组件定义属性并传递数据
        2. 子组件操作：通过`props`选项接收数据
    * 子->父：自定义事件 + $emit()
        * 方式一（推荐）
            1. 父组件操作：给子组件自定义事件，并把父组件方法作为事件处理函数
            2. 子组件操作：子组件通过`$emit()`触发自定义事件，并传递数据
        * 方式二：简单数据
            1. 父组件操作：`v-bind:xx.sync`
            2. 子组件操作：`this.$emit('update:xx',参数)`
            ```js
                // <div v-bind:todo.sync="todo"></div>
                // 以上代码等效于-> 
                // <div v-bind:todo="todo" v-on:update:todo="todo=$event"></div>
            ```
        * 方式三：把父组件方法通过props传到子组件执行，并传回所需数据

    * 深层及组件通讯
        * 方式一：逐层传递（不推荐）
            * 繁琐
            * 不靠谱
        * 方式二：事件总线Bus
            > 采用自定义事件方式实现，把事件绑定到每个组件都能直接访问的位置，然后在需要的组件中触发该事件
            * 利用$on()绑定事件
            * 使用$emit()触发事件


* props
    > 接收父组件传入的数据，实例化组件时会遍历props下所有的数据并写入组件实例
    * 不要尝试修改父组件传入的数据，这个是不被允许的，应该遵循谁的数据谁修改的原则，可以把父组件的方法传到子组件执行的方式来修改数据

* 生命周期函数（钩子函数）
    > 在组件定义后特定的时间自动的函数
    * created

## day3-2

## 面试题
* 如何在父组件拿到子组件数据
    ```js
        // 父组件代码
        <input ref="input" />
        <list ref="list" /> // {data(){return {count:100}},methods,computed}

        // 组件层级
        this.$children[0].count;// 100

        // ref
        this.$refs.list.count;//100
    ```

### 复习
* 组件
    * 优点
    * 通讯
        * 父->子：props
        * 子->父：
            * 自定义事件
                ```js
                    <list v-on:add="addItem" />

                    // list组件内部
                    this.$emit('add',10)
                    // 在js中绑定自定义事件
                    this.$on('remove',function(){});// this.$emit('remove')
                ```
            * v-bind的sync修饰符
                ```js
                    <list v-bind:val.sync="todo">

                    // list组件内部（子组件）
                    this.$emit('update:val',200)
                ```
            * 把父组件的方法传到子组件执行
        * 多层级通讯
            * 逐层传递
            * Bus事件总线
                > 把事件绑定在任意组件可以访问到的位置
                ```js
                    const Bus = new Vue()
                    Bus.$on()
                    Bus.$remove()
                    Bus.$emit()
                ```

### 知识点
* 组件层级
    * $parent
    * $children
    * $root

    ```js
        <list />
        this.$parent
        this.$children

        this.$root
    ```
* props
    * 接收属性
        * 子组件接收：成为子组件实例的属性
        * 子组件不接收：成为子组件根元素的html属性
    * 数据类型校验
        * 普通类型校验：
            ```js
                props:{
                    age:Number
                }
            ```
        * 允许多个类型校验
            ```js
                 props:{
                    age:[Number,String]
                }
            ```
        * 必填
            ```js
                 props:{
                    age:{
                        type:[Number,String],
                        required:true
                    }
                }
            ```
        * 默认值
            > 默认值如果为引用数据类型，default必须使用函数形式
            ```js
                 props:{
                    age:{
                        type:[Number,String],
                        default:18

                    }
                }
            ```
        * 自定义校验规则
            ```js
                age:{
                    type:[Number,String],
                    // age大于等于18，小于等于30
                    validator(value){
                        return value>=18 && value<=30;
                    }
                }
            ```

* npm script（npm脚本）
    > package.json中的scripts命令，可以通过`npm run xxx`运行
    * start / test： 这两个脚本命令可以使用`npm start`/`npm test`运行

* render渲染函数

* ESModule
    > ECMAScript2015退出的模块化开发规范
    * 以前采用的方案
        * AMD   require.js
        * CMD   sea.js
    * 使用
        * 导出：export
            > export后只能跟function、class、var、let、const、default、{}


        * 引入: import
            * `import xxx from 'url'`: 引入模块对象中的default属性
            * `import {username} from 'url'` 引入模块对象中的username属性
            * `import * as all from 'url'` 引入模块对象中所有属性并赋值给all
    * 注意事项
        1. 多次引入会从缓存中读取，不用担心性能问题
        2. 只支持静态引入（路径不能使用变量）
        3. 每个模块具有独立作用域，相互之间不影响


## day3-3

### 面试题
* RESTful接口规范
* Vue中如何设置响应式属性
    * 初始化时在data中设置
    * Vue.set()/this.$set()
    * 数组重写方法
* 紧急绑定修复
    * master -> hotfix  -> 修复bug -> master/dev 
* 状态码
    * 200
    * 301
    * 302
    * 304
    * 400
    * 401
    * 403
    * 404
    * 500


### 复习
* VueCLI
    * 安装：
        * `npm install -g @vue/cli`
        * `yarn global add @vue/cli`
    * 创建项目：vue create 
    * 配置文件：vue.config.js
    * npm script
* ESMdoule
    * 导出: exports
        > exports就是给模块对象添加属性
    * 导入：import
        > import就是从模块对象中引入属性
    * 在script标签中使用
        > type="module"

### 知识点
* Vue单文件组件
    > 后缀名为`.vue`的文件

* vue.runtime.esm.js运行时版
    > 不包含编译器的版本
    * 编译器的作用：tempalte -> render函数

* 虚拟节点
    > 结构类似真实节点的js对象

* 内容插槽slot
    * 核心内容
        * 内置组件：`<slot/>`
        * 指令：`v-slot`
    * 父->子：插槽
        * 默认插槽default: `<slot/>` 
        * 命名插槽：`<slot name="header" />`
            * v-slot:header
    * 子->父: 作用域插槽
        > v-slot:header="scope"
        * scope保存header插槽中props数据
* 生命周期
    > 组件从创建到销毁的过程
    * 生命周期函数（钩子函数）： 在生命周期中特定的时间自动执行的函数
        * 搞懂执行顺序
        * 搞懂每个钩子函数中适合做什么操作
    * 生命周期阶段
        * 创建阶段Create
            * beforeCreate
            * created
        * 挂载阶段Mount
            * beforeMount
            * mounted
        * 更新阶段Update
            * beforeUpdate
            * updated
        * 销毁阶段Destory
            * beforeDestroy
            * destroyed
* 虚拟DOM
    * 真实DOM

* 页面刷新流程
    > 真实DOM节点的频繁操作会影响页面性能
    * 操作真实DOM -> 页面刷新
    * 修改数据 -> 更新虚拟DOM -> diff算法 -> 操作真实DOM -> 页面刷新
        * count:10->11->12->11->10
* 如何销毁一个组件
    * $destroy()
    * v-if
    * 页面切换

## day3-4

### 面试题
* 父组件A与子组件B生命周期函数的执行顺序
    * 初始阶段
        1. 父组件beforeCreated
        2. 父组件created
        3. 父组件beforeMount
            4. 子组件的beforeCreate
            5. 子组件的created
            6. 子组件的beforeMount
            7. 子组件的mounted
        8. 父组件的mounted
    * 更新阶段
    * 销毁阶段

### 复习
* 插槽
    * 默认插槽
    * 命名插槽
    * 作用域插槽
        > 把数据从子组件传到父组件实现更灵活的可定制化
* 生命周期
    * 搞懂生命周期中做了哪些操作
    * 有哪些钩子函数以及它们执行顺序
    * 在每个钩子函数中适合做什么操作

### 知识点
* 真实DOM节点的频繁操作会影响页面性能
* key的作用
    * Vue的diff算法会根据key值识别与节点的对应关系，如果没有提供key，则采用就地复用原则（因为这样会更加高效）
    * key必须是唯一且稳定的值

* 单页面应用SPA(single page application)
* 多页面应用MPA(multiple page application)
* VueRouter
    * 使用步骤
        1. 安装引用
            ```js
                npm i vue-router
                import VueRouter from 'vue-router'
            ```
        2. 安装（使用）插件
            ```js
                Vue.use(VueRouter)
            ```
        3. 实例化路由并配置路由参数
            ```js
                const router = new VueRouter({
                    routes:[{
                        path:'/home',
                        component:Home
                    }]
                })
            ```
        4. 把router实例注入到vue实例中
            ```js
                new Vue({
                    router:router
                    //...
                })
            ```
        5. 在组件中使用
            * 显示路由组件：`<router-view/>`
            * 路由跳转组件：`<router-link/>`
* 路由导航
    * 声明式导航
        > <router-link to="/home" />
        * to
        * tag
        * active-class
        * event
        * replace
    * 编程式导航（命令式导航）
        > 利用js代码进行跳转，只要把router实例注入到Vue的跟实例中，在每个组件中就可以获取以下属性：
        * $router: 路由实例，可以通过它实现页面跳转
            * push()    等效于没有replace属性的<router-link/>
            * replace() 等效于拥有replace属性的<router-link/>
            * back()
            * forward()
            * go()
        * $route: 当前路由信息，可以获取跳转时传入的信息

* Vue的UI组件库
    * elementUI     饿了么出品
    * ant-design    蚂蚁金服出品
    * iView         腾讯出品
    * VantUI        有赞出品
    * ...
    * 使用步骤
        1. 安装引入
            ```js
                npm i xxx
                import xxx from 'xxx'
            ```
        2. 使用插件
            ```js
                Vue.use(xxx)
            ```
        3. 引用样式
            ```js
                import 'xxx.css'
            ```
* 在Vue中发起ajax请求
    * axios

## day3-5

### 复习
* 路由
    * VueRouter的使用步骤
        * 路由组件
    * 路由跳转
        * 声明式导航
            > 利用 `<router-link/>`
        * 命令式导航（编程式导航）
            * $router   跳转
            * $route    当前路由信息
    * 路由显示
        `<router-view/>`    动态组件（根据页面路径显示不同的内容）
* axios
    * get()
    * post()
    * put()
    * patch()
    * delete()

### 知识点
* 路由跳转方式
    * path
    * name
* 路由传参
    * 跳转时传参
        * 动态路由传参
        * query传参
            > 通过url参数传参
        * params传参
            > 只支持name跳转方式，参数在页面刷新后消失（动态路由除外）
    * 定义路由时传参（了解）
        > props父传子
        * Object
        * Function
        * Boolean

* 数据持久化
    > 页面刷新后数据依然存在

* 动态路由组件监听
    * watch
        > 监听实例下任意属性的改变，包括子属性
    * 路由守卫：beforeRouteUpdate
        > 注意：进入该路由守卫时，页面并没有跳转成功，所以通过this.$route.prams.id获取到的是之前的值
* 路由守卫
    > 路由跳转过程中自动自行的钩子函数
    * 全局守卫
        > 所有的路由切换都会执行，一般写在路由配置文件中
        * router.beforeEach(fn)
            * to
            * from
            * next
        * router.afterEach(fn)
            * to
            * from
        * router.beforeResolve(fn)
            * to
            * from
            * next

    * 路由独享守卫
        > 写在路由配置
        * beforeEnter
    * 组件内的守卫
        > 写在路由组件内（类似于生命周期钩子函数）
        * beforeRouteEnter()    进入路由组件
        * beforeRouteUpdate()   路由组件更新
        * beofreRouteLeave()    离开路由组件
* 路由跳转步骤
    1. 导航被触发。
    2. 在**失活组件**里调用beforeRouteLeave离开守卫。
    3. 调用全局的 beforeEach 守卫。
        4. 在**重用的组件**里调用 beforeRouteUpdate 守卫 (2.2+)。
    5. 在路由配置里调用 beforeEnter。
        6. 解析异步路由组件。
    7. 在被**激活组件**里调用 beforeRouteEnter。
    8. 调用全局的 beforeResolve 守卫 (2.5+)。
    9. 导航被确认。
    10. 调用全局的 afterEach 钩子。
    11. 触发 DOM 更新。

## day4-1

### 面试题
* 跨域cookie发送问题
    > cookie会随着请求自动发给同域服务器，如需发给跨域服务器，则需要以下操作
    1. 服务器操作：设置相应头`Access-Controll-Allow-Credantials=true`
    2. 客户端：设置`withCredentials=true`
    3. 浏览器：chrome设置` --disable-features=SameSiteByDefaultCookies`

### 复习
* 路由跳转方式
    * path跳转
    * name跳转
        > 需要给路由命名
* 路由传参方式
    * 定义时传参（用得较少）
    * 跳转时传参
        * query传参(url参数id=10&page=1&size=5)
            > 接收：$route.query
        * params传参
            > 接收：$route.params，刷新后数据消失（动态路由除外）
            * 动态路由
                > 监听动态路由变化：
                * watch
                * beforeRouteUpdate
            * params

* 路由守卫
    > 路由跳转过程中自动自行的钩子函数
    * 全局守卫
        > 路由实例的方法，一般写在路由配置文件中
    * 路由独享
        > 路由配置
    * 组件内守卫
        > 写在路由组件中，类似与生命周期函数

### 知识点
* 实现页面访问权限控制
    * 利用路由守卫
        > 先配置好路由，然后利用路由守卫去控制和这个路由是否可访问
    * router.addRoutes()
        > 开始先不配置路由，根据用户权限动态添加路由

* token令牌
    > Token 是服务端生成的一串加密字符串，以作客户端进行请求的一个令牌，当第一次登录后，服务器生成一个 Token 便将此 Token 返回给客户端，以后客户端只需带上这个 Token 前来请求数据即可，无需再次带上用户名和密码

    * 目的：Token 的目的是为了减轻服务器的压力，减少频繁的查询数据库，使服务器更加健壮

    * token操作
        > jsonwebtoken模块
        * 生成：jwt.sign(data,privateKey)

    * 使用步骤
        1. 客户端使用用户名和密码登录   
        2. 服务端校验用户名与密码，并生成 token（加密），然后返回给前端
        3. 客户端接收到 token，并保存到本地
        4. 客户端以后的每次请求都在请求头中要携带 token
        5. 服务端对每一次请求进行 token 验证（解密），相同则放行，不同则拒绝
    
* 全局状态：Vuex
    * 使用步骤
        1. 安装引入
            ```js
                npm i vuex
                import Vuex from 'vuex'
            ```
        2. 安装（使用）插件
            ```js
                Vue.use(Vuex);
            ```
        3. 实例化
            ```js
                const store = new Vuex.Store({
                    // 核心参数
                    // 定义共享数据
                    // 定义修改这些数据的方法
                })
            ```
        4. 注入根实例
            ```js
                new Vue({
                    // ...
                    store:store,
                })
            ```
        5. 在组件中使用
            > this.$store
            * 获取
            * 修改
    * Vuex核心参数
        * state : 全局状态（数据），类似于组件中的data
            > 组件中获取方式：`this.$store.state.xxx`
        * getters: 根据state映射出的属性，类似与组件中的computed
            > 组件中获取方式：`this.$store.getters.xxx`
        * mutations: 修改状态的唯一方法，类似于组件methods
            > 组件中调用方式：`this.$store.commit(mutation)`
## day4-2

### 复习
* Vuex：全局状态管理工具
    * 作用（好处）
    * 使用步骤
    * 核心配置
        * state   
            > this.$store.state.xx 
        * getters
        * mutations
            > store.commit(mutation)，mutation中只支持同步操作

        ```js
            const mutations = {
                //'username':100,
                //'showTabbar':function(){}
                showTabbar(state,payload){},
                login(){},
                logout(){}
            }
            const state = {

            }

            function commit(m,payload){
                //

                // mutations.login()
                // mutations['login']()
                mutations[m](state,payload);
            }

            commit('login')
        ```
### 知识点
* 核心配置
    * state
    * getters
    * mutations: 同步操作
        > 触发mutation的方式：store.commit(mutaiton,payload)
    * actions
        > 类似与mutations, 执行异步操作，触发action的方式：store.dispatch(action,payload)

* vuex模块化：modules
    > 模块化后
    * 默认影响state的获取，不影响getters,mutations,atcions的操作(他们公用一个命名空间，意味着每个模块中的名称不能相同，可以使用命名空间`namespace`解决这个问题)
    * 在模块中获取其他模块的数据：
        * 在actions中获取: `context.rootState`
    
* 命名空间:`namespaced:true`
    > 添加`namespaced`属性后，就是把当前模块放到独立的命名空间中，影响getters,mutations,actions的操作
* 路径别名
    > 在webpack的环境中，可以用一些符号来代替某些目录，达到简化操作的效果
    * `@`: 代表`src`目录
* Vuex映射
    * mapState()
    * mapGetters()
    * mapMutations()
    * mapActions()
    > 模块在启用命名空间后，mapState,mapGetters,mapMutations,mapActions的第一个参数可以使用命名空间字符


## day4-3

### 面试题
* 如何让v-model在一个组件中生效
    > v-model = v-bind:value + v-on:input

* 闭包
    * 正常函数：代码执行完后，内部变量会被回收
    * 闭包函数：函数内部的变量被引用，垃圾回收器不回收内部的变量，让其长期驻留内存
    * 垃圾回收机制
        * 标记清除法
        * 引用计数（IE6）
    * 全局作用域
    * 页面事件函数
```js
    function hello(){
        var username = 'laoxie'
        var age=18;
        age++
        return `hello ${username}，年龄为${age}`
    }
    hello();
    hello();

    function hello(){
        var username = 'laoxie'
        var age=18;
        var say = function(){
            age++
            return `hello ${username}，年龄为${age}`
        }
        return say
    }

    hello()(); // age=19
    hello()(); // age=19

    var say2 = hello();
    say2();//age=19
    say2();//age=20

    var obj1 = {
        name:'obj1',
        get(){
            obj2.name
        }
    }
    var obj2 = {
        name:'obj2',
        get(){
            obj1.name
        }
    }

    var obj1 = null;

    window.onload = function(){
        
    }
```

### 项目要求
* WebApp
* 后台管理系统
    > 管理webApp中的数据，实现数据的增删改查
* git分支
    * master/main   主分支（默认），主要用于版本发布
    * dev
* 解决冲突
    * 在团队协作项目中代码冲突不可避免，但可以通过合理的分工来减少冲突


## day4-4

### 面试题
* Vue组件props数据类型校验
    ```js
        {
            props:['list','index'],
            props:{
                //list:Array,
                list:{
                    type:Array,
                    required:true,
                    //default:[]
                },
                index:[Number,String]
            }
        }
    ```
### 复习
* 页面访问权限控制
    * 方式一：先配置完所有路由，然后通过路由守卫来限定页面的访问
    * 方式二：动态添加路由
        > router.addRoutes()，先配置基础路由，然后根据用户的权限动态添加指定路由
* v-bind
    ```js
        <div v-bind:index="item.idx" v-bind:class="['box']">
        <div v-bind:class="{box:false}">
        {
            data(){
                return {
                    user:{name:'tiantian',age:28,gender:'男'}
                }
            }
        }
        <div v-bind="user"/> // 等效于 <div v-bind:name="user.name" v-bind:age="user.age" v-bind:gender="user.gender">
    ```
### 知识点
* `<keep-alive/>`
    ```js
        <keep-alive>
            <MyComponent v-if="show"/>
        </keep-alive>
        <keep-alive>
            <router-view/>
        </keep-alive>
    ```
* `<transition/>`/`<transition-group/>`
    ```js
        <transition>
            <div class="box"></div>
        </transition>

        // style
        
        .box{height:100px}
        // 入场动画
        .v-enter{width:100px;}
        .v-enter-to{width:300px;}
        .v-enter-active{transition:width 2s;}

        // 出场动画
        .v-leave{width:300px;}
        .v-leave-to{width:100px}
        .v-leave-active{transition:width 2s;}
    ```

## day4-5

### 复习
* 内置组件
    * `<slot/>`
        ```js
            <todo-list :data="datalist">
                <div v-for="item in datalist"></div>
            </todo-list>
        ```
        * v-slot
    * `<keep-alive/>`
        * include
        * exclude
    * `<transition />` / `<transition-group/>`
        * name: 默认v
        * 入场动画
            * v-enter       
            * v-enter-to
            * v-enter-active
        * 出场动画
            * v-leave
            * v-leave-to
            * v-leave-active
    * `<component/>`    动态组件<router-view/>
        * is

### 知识点
* 指令
    >一个完整的指令格式：v-on:click.stop="handle"
    * v-once: 绑定的数据只渲染一次，一般用于一些不需要修改的数据绑定（可进行性能优化）
    * v-pre
        ```js
            <pre>
                <div></div>
            </pre>
        ```
    * v-cloak
        > 配合样式解决数据闪现的问题
* 自定义指令
    > 在Vue中不建议直接操作节点，指令除外
    * 分类
        * 全局指令：Vue.directive(name,options)
        * 局部指令: directives
    * 钩子函数
        * bind：初始化时执行（默认）
        * inserted：元素插入页面时执行
        * update：所在模板更新时执行
        * componentUpdated：所在模板完成一次更新周期时调用
        * unbind：指令与元素解绑时执行
* 过滤器filter
    * 分类
        * 全局过滤器：Vue.filter(name,def)
        * 局部过滤器: filters
    * 过滤器使用场景
        * {{}}
        * v-bind

    ```js
        // 正则：零宽断言，不能匹配内容，只用于判断
        // abc
        // a(?=x) 如果a后面存在x，则匹配a
        // a(?!x) 如果a后面不存x，则匹配a
        // \B,\b
        1000000 -> 1,000,000
        total.replace(//,',')

        Vue.filter('formatMoney',(value)=>{

        })
        Vue.filter('formatPrice',(value,flag="￥")=>{
            return flag+value;
        })

        {{total | formatMoney | formatPrice}} // -> formatPrice(formatMoney(total))
        {{total | formatPrice('$')}} 
        <div v-bind:total="total | formatMoney">
    ```
    * 零宽断言
        * (?=pattern) ：零宽正向先行断言(zero-width positive lookahead assertion)
        如果某个字符后面能匹配pattern，则匹配该字符

        * (?!pattern) ： 零宽负向先行断言(zero-width negative lookahead assertion)
        如果某个字符后面不能匹配pattern，则匹配该字符

        * (?<=pattern)： 零宽正向后行断言(zero-width positive lookbehind assertion)
        如果某个字符前面能匹配pattern，则匹配该字符

        * (?<!pattern) ：零宽负向后行断言(zero-width negative lookbehind assertion)
        如果某个字符前面不能匹配pattern，则匹配该字符
    
* mixin混入
    > 提取Vue实例化是的公共配置
    * 全局mixin: Vue.mixin()
    * 局部mixin: mixins
    ```js
        crated(){
            this.$store.commit('showTabbar',false);
        },
        destroyed(){
            this.$store.commit('showTabbar',true);
        }

        // 全局mixin: 影响之后创建的所有组件实例（不推荐）
        Vue.mixin({
            // 组件公共配置
            created(){
                this.$store.commit('showTabbar',false);
            },
            destroyed(){
                this.$store.commit('showTabbar',true);
            }
        })

        // 局部mixin
    ```
* 依赖注入
    * 组件通讯
        * 父->子：props
        * 子->父：
            * 自定义事件
            * sync是修饰
            * 把父组件方法传到子组件执行并回传参数
        * 深层级组件通讯
            * 逐层传递（不推荐）
            * Bus：自定义事件（把事件绑定到所有组件都能访问到的实例中）
        * 插槽
            * 普通插槽
            * 作用域插槽
        * 路由
            * 定义时传参：props
            * 跳转时传参
                * query
                * params
        * vuex: 全局状态共享工具
        * 依赖注入：一般用于深层及组件通讯，不关注组件层级，在任何子组件中方便获取父组件共享的数据
            > 增强版的props
            * provide： 父组件提供（共享）数据
            * inject：子组件注入（接收）数据

    * 插件plugin
        * 插件类型
        * 定义: 插件就是一个对象（提供install方法）或一个函数
            ```js
                // 定义个Vue插件
                const myPlugin = function(){
                    
                }
            ```

## day5-1

### 面试题
* 为什么数组中的push,pop,shift,unshift,splice,sort,reverse这些方法能更新视图，而其他的不行？
    > 因为以上方法被Vue在原型中重写
    ```js
        {
            data(){
                return{
                    list:[1,2,3],
                    goodslist:[{name:'xxx',price:9.9}]
                }
            }
        }
        
        // this.list的原型不是Array.prototype，而是被Vue重写的对象，对象中包含push,pop,shift,unshift,splice,sort,reverse
        this.list.push(10);//
        this.list[3] = 10;
        this.goodslist[0].price = 100
    ```
### 知识点
* history路由：需要服务器的支持
    1. mode:'history,
    2. 服务器支持
        > 除静态资源外，所有的请求都响应index.html内容

## day5-2

### 面试题
* 以最快的速度找出数组arr中两个数的和等于13的数
    > [1,2,3,4,5,6,7,8,9,10]
    ```js
        let arr = [1,2,3,4,5,6,7,8,9,10]
        arr.forEach(item=>{
            arr.forEach(it=>{
                if(item+it===13){
                    console.log(item,it);
                }
            })
        })

        // 24次循环后找到3和10
        wai:for(var i=0;i<arr.length-1;i++){
            for(var j=i+1;j<arr.length;j++){
                if(arr[i]+arr[j]===13){
                    console.log(arr[i],arr[j]);
                    break;
                }
            }
        }

        // 如何一次循环搞定
        let obj={};//{1:1,2:1,3:1,4:1,5:1,6:1,7:1}
        for(let i=0,len=arr.length;i<len;i++){console.log(666)
            obj[arr[i]] = 1;
            const val = 13 - arr[i];
            if(obj[val] !== undefined){
                console.log(val,arr[i])
                break;
            }
        }
    ```
* js是一门单线程语言
    * 阻塞
    * 同步与异步
    * webAPI
    * EventLoop 事件循环
        > 执行栈空闲时，时间循环机制会启动，每一次事件循环都会优先从微任务队列中把代码移入执行栈中执行，只有当微任务队列被清空后才会执行宏任务队列中的代码
        * 宏任务：setTimeouter,setInterval,ajax,I/O...
        * 微任务: promise.then
    ```js
        console.log(1)
        for(let i=0;i<1000000;i++){
            // 5s
            console.log(3)
        }
        console.log(2);


        // 1,2,3
        console.log(1)
        setTimeout(
            ()=>{
                console.log(3)
            },
        5000)
        console.log(2)

        // 1,2,3
        console.log(1)
        setTimeout(
            ()=>{
                console.log(3)
            },
        0)
        console.log(2)

        // 1,4,2,3
        console.log(1)
        setTimeout(
            ()=>{
                console.log(3)
            },
        0)
        for(let i=0;i<1000000;i++){
            // 5s
            console.log(4)
        }
        console.log(2)


        // 1,4,2,5,3
        console.log(1)
        setTimeout(
            ()=>{
                console.log(3)
            },
        0)
        new Promise((resolve,reject)=>{
            console.log(4);
            resove(5)
        }).then((res)=>{
            console.log(res)
        })
        console.log(2);

        // 输出结果：1，4，7，5，2，3，6
        console.log(1);
        setTimeout(() => {
            console.log(2);
            Promise.resolve().then(() => {
                console.log(3);
            });
        });
        new Promise((resolve, reject) => {
            console.log(4);
            resolve(5);
        }).then((data) => {
            console.log(data);
        });
        setTimeout(() => {
            console.log(6);
        });
        console.log(7);

        // 练习
        console.log(1);
        setTimeout(() => {
            console.log(2);
            Promise.resolve().then(() => {
                console.log(3);
            });
        });
        new Promise((resolve, reject) => {
            console.log(4);
            resolve(5);
        }).then((data) => {
            console.log(data);
            Promise.resolve()
            .then(() => {
                console.log(6);
            })
            .then(() => {
                console.log(7);
                setTimeout(() => {
                    console.log(8);
                }, 0);
            });
        });
        setTimeout(() => {
            console.log(9);
        });
        console.log(10);
    ```
* history路由
    1. mode="history"
    2. 服务器支持
    ```js
        // <script src="/js/app.xxx.js" />
        app.use(express.static());// 静态资源服务器
        app.use('/api',allRouter);
        // 支持history路由的中间件
        app.use(function(req,res){
            res.send('index.html的内容')
        })
    ```
* vuex中mapState,mapGetters,mapMutations,mapActions等方法的作用
    > 简化操作,把vuex中的数据或修改方法映射到组件
* event事件对象中target与currentTarget的区别
    * target: 触发事件的元素
    * currentTarget: 绑定事件的元素
## 知识点
* React
    * 渲染节点：ReactDOM.render(vNode,target)
    * 创建虚拟节点: React.createElement(type,props,children)
* JSX规则
    * 在JSX中使用js变量必须使用`{}`花括号
    * 不能使用js关键字
        * class -> className
        * for   -> htmlFor
    * 多个单词的属性必须使用驼峰形式
        * onkeyup -> onKeyUp
        * autofocus->autoFocus
        * ...
    * 必须结束标签
        * `<input>` -> `<input />`
        * `<img>`  -> `<img />`
    * style只能使用对象形式
    * 使用 js 语法注释（如{/*注释内容*/}，//注释内容）

* 把数据写入JSX结构

* 组件化开发
    * 分类
        > 优先使用函数组件，因为它有更快的速度
        * 函数组件
            > 必须有返回值，一般用于UI展示
        * 类组件
            > 必须包含render函数，且必须有返回值
            * 状态: state
                * 获取：this.state.xxx
                * 修改：this.setState()
                    > 覆盖式的修改: 用一个新的值覆盖旧的值
            * this
                > 默认在constructor,render,生命周期函数中才有this指向，自定义方法默认没有this指向
    * 要求
        * 首字母大写
        * 只能有一个根元素
* 组件通讯
    * 父->子：props
        1. 父组件传递数据
        2. 子组件接收
            * 函数组件：函数的第一个参数为props
            * 类组件
                * constructor第一个参数
                * this.props
    * 子->父: 把父组件方法到子组件中执行，并回传参数
        

* 受控组件与非受控组件
    * 受控组件：利用组件状态控制表单的值
    * 非受控组件：通过节点操作方式控制表单的值

* 事件处理函数
    * event
    * this
      >改变this指向：call(),apply(),bind()



* react组件的数据挂载方式
    * state     组件的状态（类组件专属）
    * props     父组件传入的数据
    * 条件渲染：三元运算
    * 列表循环
        * map
        * key
    * 事件处理
        * 驼峰写法
        * event: 事件处理函数的最后一个参数
        * this
            > 默认没有this指向，需要通过bind方法指定（bind改变this指向只生效第一次）
        * 传参
    * ref
        > ref属性用在普通元素中，得到对应的dom节点，用在组件上，得到组件实例
        * 回调函数写法
        * React.createRef()
        ```js
            // 只能在类组件中使用
            render(){
                return (
                    <input ref={(el)=>this.input=el}>

                )
            }

            function MyComponent(){
                return (
                    <input ref={el=>}>
                )
            }
        ```
    * html内容
        > `<div dangerouslySetInnerHTML={{ __html: htmlString}}></div>`

## day5-4

### 知识点
* 组件通讯
    * 父->子：props
    * 子->父：把父组件方法传到子组件执行，并回传参数
    * 深层级组件通讯
        * props逐层传递（不推荐）
        * Context组件共享
            1. 创建context
                ```js
                    const context = React.createContext(defaults)
                    // defaults默认值在没有第2步（没有Provider时）是得到
                ```
            2. 父组件共享数据: Provider
                ```js
                    <context.Provider value={data}>
                        // 子组件
                    </context.Provider>
                ```
            3. 子组件接收
                * 函数
                    * Consumer
                    ```js
                        <context.Consumer>
                            {
                                (data)=>{
                                    // data就是provider共享的数据
                                }
                            }
                        </context.Consumer>
                    ```
                    * Hooks
                        * useContext
                * 类组件
                    * Consumer
                        > 一般在JSX中使用
                    * contextType
                        > 设置子组件contextType静态属性，然后通过this.context.xxx获取共享数据，一般在js代码中使用
* 使用React
    * script引入：浏览器实时编译，效率较低
        * react.js
        * react-dom.js
        * babel.js 
    * webpack环境
        > 构建工具： grunt -> gulp -> webpack
        * gulp: 基于任务的构建工具
        ```js
            // gulp.task('build')
            export.build = function(){
                gulp.src('./src/sass/*.scss')
                .pipe(sass())
                // ...
                .pie(gulp.dest('./dist'))
            }
        ```
        * webpack:基于配置的构建工具
            > 所有需要配置写入`webpack.config.js`文件
* 从0配置基于Webpack的React环境
    1. 创建目录与文件
    2. 安装依赖
        * react & react-dom
        * @babel/core & babel-loader & @babel/preset-react
        * webpack & webpack-cli & webpack-dev-server
        * html-webpack-plugin
    3. 配置webpack
        > 项目根目录下webpack.config.js，核心配置：
        * entry     入口
        * output    出口
        * devServer 测试服务器
        * loader    加载器
            > module.rules
        * plugin    插件

### 练习
* 从0配置基于Webpack的Vue环境

## day5-5

### 复习
* webpack
    * 工作原理：从入口开始，根据依赖分析项目所有文件，并利用配置好的加载器、插件等把模块编译成浏览器识别的代码
    * 核心配置
        * entry
        * output
        * loader
            > 写在module.rules中，每一类文件都需要配置一个加载器
            * test  匹配文件
            * use/loader    加载器
        * plugins   插件
            * html-webpack-plugin
            * clean-webpack-plugin
        * devServer 测试服务器
            > webpack-dev-server

        * resolve
            * extensions: 默认扩展名
            * alias:  路径别名

### 知识点
* 类组件生命周期
    1. 搞懂生命周期执行过程
    2. 搞懂生命周钩子函数适合是什么操作
* 钩子函数
    * Initial: 初始化阶段
        * constructor()
    * Mounting：挂载阶段
        * componentWillMount()  -> UNSAFE_componentWillMount()
        * componentDidiMount()
    * Updating：更新阶段
        * componentWillUpdate() -> UNSAFE_componentWillUpdate()
        * componentDidUpdate()
    * Unmounting：卸载阶段
        * componentWillUnmount()
    * 特殊生命周期函数
        * componentWillReceiveProps() -> UNSAFE_componentWillReceiveProps()
        * shouldComponentUpdate()

* 组件刷新条件
    * state改变
    * props改变
    * 父组件刷新
    * 强制刷新
        * react: this.foreceUpdate()
        * vue: this.$foreUpdate()

* 组件性能优化
    * shouldComponentUpdate()
    * PureComponent 
        > 一个做了shouldComponentUpdate优化后的React.Component

* ReactRouter
    * 路由类型
        * HashRouter
        * BrowserRouter
    * 路由渲染
        * Route
            * path
            * component
            * exact
        * Redirect
            * from
            * to
            * exact
        * Switch
    * 导航
        * 声明式导航
            * Link
            * NavLink
        * 编程式导航
            * history
                * push()
                * replace()
            * 如何获取history,location,match
                * Route组件的component属性渲染组件
                * withRouter高阶组件

* 高阶组件HOC（High Order Component）
    > 高阶组件并不是一个React组件，而是一个**纯函数**，
    * 接收目标组件
    * 返回一个新的组件
* 纯函数
    * 不修改传入的参数
    * 固定输入有固定输出
    ```js
        function add(a,b){
            return a + b;
        }
        add(10,20);//30
        add(10,20);//30

        function randomNumber(min,max){
            return parseInt(Math.random()*(max-min+1))+min
        }
        randomNumber(10,20);//11
        randomNumber(10,20);//18
    ```
* 函数柯里化
    > 通过函数调用继续返回函数的方式，实现多次接收参数后统一处理的函数编码形式

### 练习
* 把todolist案例移植到webpack环境
* withStorage高阶组件实现多参数传递

## day5-6

### 面试题
* js严格模式
    ```js
        (()=>{
            'use strict'
        })()
    ```

### 复习
* 路由
    * 常用组件
        * HashRouter
        * BrowserRouter
        * Route
        * Redirect
        * Switch
        * Link
        * NavLink
    * 导航
        * 声明式导航
        * 编程式导航
            * 核心对象
                * history
                * location
                * match
            * 获取核心对象
                * Route的component渲染
                * withRouter
* 高阶组件
    * 提取公共代码
    * 属性代理

### 知识点
* 扩展运算符：`...`
    * 扩展操作
        > 用于数据的复制，函数的执行
        ```js
            const arr = [10,20,30]
            const res = [...arr,40,50]
            res.push(...arr);// 等效于res.push(10,20,30)
        ```
    * 剩余操作
        > 用于函数的定义，解构
        ```js
            function add(a,...arr){

            }
            add(10,20);
            add(10,20,30)

            const arr = [10,20,30]
            const [a,...b] = arr;
            const obj = {username:'tiantian',password:123,role:'vip',age:28}
            const {username,password,...o} = obj;
        ```
* 权限控制
    > 权限列表
    * 页面权限控制
        * Vue
            * 路由守卫
            * 动态添加路由
        * React
            * 高阶组件
            * 条件判断
    * 按钮级别权限控制
        ```js
            // user:{username,_id,auth:{complete:true,delete:false}}
            // react
            <button>完成</button>
            <button disabled={!user.auth.delete}>删除</button>
            {
                user.auth.delete ? 
                <button>删除</button>
                :null
            }

            // vue
            <button v-auth:complete>完成</button>
            <button v-auth:delete>删除</button>

            Vue.directive('auth',{
                bind(el,binding){
                    if(!user.auth[binding.arg]){
                        el.disabled = true;// 禁用
                        // el.parentNode.removeChild(el);// 隐藏按钮
                    }
                }
            })
        ```
* reactUI框架
    * ant-design

* ajax请求
    * XMLHttpRequest
    * axios
    * fetch

## day6-2

### 面试题
* React中如何获取组件标签内的内容
    > 类似于Vue插槽，在React中通过`props.children`获取，一般用`React.Children`下的方法配置使用

### 知识点
* Redux使用步骤
    1. 安装
        ```js
            npm i redux
        ```
    2. 引入
        ```js
            import {createStore} from 'redux'
        ```
    3. 创建仓库
        > 在创建仓库之前，需要初始化state和定义修改state的方法
        ```js
            const initState = {
                userInfo:{}
            }
            const reducer = function(state,action){
                // 这里实现如何修改state
                switch(action.type){

                }
                return newState
            }
            const store = createStore(reducer,initState)
        ```
    4. 在组件中使用
        > 利用store提供的方法实现以下操作
        * 获取：`store.getState()`
        * 修改: `store.dispatch(action)`
        * 监听: `store.subscribe(fn)`

* Redux的核心
    * store    仓库（存放共享数据的地方）
    * state    状态
    * reducer  修改state的方式
        > 是一个纯函数，接收state与action作为参数，必须返回一个新的state
    * action   命令
        > 格式：`{type:'login'}`

* 组件刷新场景
    * state被修改
    * props被修改
    * 父组件刷新
    * 强制刷新
* react组件与redux结合
    > 利用高阶组件实现redux数据共享，让代码有更好的**可维护性**
    * withUser

* react-redux
    > 利用高阶组件+Context实现redux数据共享
    * connect()
    * Provider
    * 使用步骤
        1. 利用react-redux提供的组件`Provider`共享store
        2. 在我们的组件中利用`connnect()`高阶组件定义传入的数据和修改方法

* redux模块化（reducer模块化）
    * combineReducers把多个reducer组合成一个大的reducer
    * 把初始数据写入到reducer中

* Action Creator
    > action构造器，一个用于创建action的函数，主要用于简化操作

* Redux设计和使用的三项基本原则
    1. 唯一数据源：一个应用只能有一个store
    2. 只有store能改变自己的内容
        > store.dispatch(action)
    3. Reducer必须是一个纯函数
        > 不修改传入的参数，固定输入有固定输出

* 简化版Redux
    > 了解redux的工作原理，了解订阅者发布者模式

## day6-4

### 面试题
* props类型校验
```js
    // vue
    <mycomponent :index="10" />
    
    {
        //props:['index'],
        props:{
            index:[Number,String],
            index:{
                type:[Number,String],
                validator(val){
                    return val>=10&val<=20
                },
                required:true
            },
            index:{
                default:1,
                default(){
                    return {}
                }
            }
        },
        created(){
            this.index;// '10'
        }
    }

    // React: 
    <MyComponent index={10} data={{a:10,b:20}} />

    import PropTypes from "prop-types";
    class MyComponent extends React.Component{
        static propTypes = {

        }
        static defaultProps = {

        }
        render(){
            this.props.index;// 10
            return (
                <div></div>
            )
        }
    }
    // 添加静态属性：propTypes
    MyComponent.propTypes = {
        // index:PropTypes.number,
        index:PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        age: function(props, propName, comName){
            if(props[propsName]<10 || props[propsName]>20){
                return new Error(propName + "必须在10到20之间");
            }
        },
        // data:PropType.object,
        data:PropTypes.shape({
            a: PropTypes.number,
            b: PropTypes.number.isRequired
        }),
    }

    // props默认值
    MyComponent.defaultProps = {
        index:1
    }
```

### 知识点
* redux中间件
    > 为了解决redux中的异步操作
    * 工作原理
    * 使用步骤
        ```js
            import {createStore,applyMiddleware} from 'redux'
            // 1. 引入中间件
            import thunk from 'redux-thunk'
            createStore(reducer)
            createStore(reducer,initState,enhancer)

            // 2. 传入中间件
            const enhancer = applyMiddleware(thunk)
            createStore(reducer,enhancer)

            // 3. 编写异步action creator
            function loginAsync(values){
                return function(dispatch,getState){
                    //ajax
                    // 异步结果返回后触发同步action
                    dispatch(login(data))
                }
            }
            // 4. 触发异步action
            dispatch(loginAsync(values))
        ```
    * 常用中间件
        * redux-thunk
        * redux-devtools-extension
        * redux-saga
            * Generator    生成器函数
            * Iterator     迭代器

* for...of
    > 能遍历具有迭代器的数据

* redux-saga使用步骤
    1. 安装
        ```js
            npm i -D redux-saga
        ```
    2. 引用
        ```js
            import createSagaMiddleware from 'redux-saga'
        ```
    3. 创建中间件
        ```js
            const sagaMiddleware = createSagaMiddleware();
        ```
    4. 将 sagaMiddleware 连接至 Store
        ```js
            const enhancer = compose(
                applyMiddleware(thunk),
                composeWithDevTools(),
                applyMiddleware(sagaMiddleware)
            )
            const store = createStore(reducer,enhancer)
        ```
    5. 运行saga配置
        ```js
            import rootSaga from './rootSaga.js';
            sagaMiddleware.run(rootSaga);
        ```


```js
    // 
    new Vuex({
        state,
        getters,
        mutations,  // 修改state（同步）
        actions,    // 异步操作，context.commit(mutation)
        store.dispatch('login')
    })

    // redux
    state
    reducer //修改state的方法
        * action.xxx
    // 异步操作：中间件

```

## day6-5

### 知识点
* React Hook
    > 一些专门增强函数组件功能的工具函数，有了这些工具函数，能够让函数组件实现类组件的功能

    * useState: 实现class组件状态的功能
        > 使用：const [state,changeState] = useState(10)

    * useEffect: 实现类组件生命周期函数的功能，在组件渲染完成后执行
        * 使用方式一
            > 等效于componentDidMount+componentDidUpdate
            ```js
                useEffect(()=>{

                })
            ```
        * 使用方式二: 指定依赖
            > 等效于componentDidMount+shouldComponentUpdate
            ```js
                useEffect(()=>{

                },[username,password])
            ```
        * 使用方式三: 空依赖
            > 等效于componentDidMount
            ```js
                useEffect(()=>{

                },[])
            ```
        * 使用方式四: 返回一个函数
            > 等效于componentWillUnmount
            ```js
                useEffect(()=>{

                },[])
            ```
    * useMemo
        > 一般用于编写一些比较耗费资源且无需重复执行的代码，以达到优化性能的目的，返回值为回调函数的结果（类似于Vue中的computed）
        * 使用方式一
            ```js
                const result useMemo(()=>{
                    // 初始化与组件刷新时执行
                    return xxx
                })
            ```
        * 使用方式二: 指定依赖
            ```js
                const result useMemo(()=>{
                    // 初始化与依赖更新时执行
                    return xxx
                },[goodslist])
            ```
        * 使用方式三: 空依赖
            ```js
                const result useMemo(()=>{
                    // 只在初始化时执行
                    return xxx
                },[])
            ```

    * useCallback
        > 作用：缓存函数，优化性能
    * useContext
        > 作用：简化context的获取
    * useReducer
        > 作用：useState的增强版，参考了redux修改数据的方式
    * useRef
        > 类似React.createRef()，只在初始化时创建ref对象，组件刷新时从缓存读取（React.createRef()每次都会创建一个新的ref对象）
    * useLayoutEffect
        > useEffect的同步版本，等效于类组件中的`componentWillMount`里面的callback函数会在DOM更新完成后立即执行,但是会在浏览器进行任何绘制之前运行完成,阻塞了浏览器的绘制,一般用于节点操作

### 周末练习
* 利用useReducer实现简化版redux
* 培养感情，组队
* 选项目

## day7-1

### 复习
* Hooks
    * 内置hook
        * useState()
        * useEffect()  / useLayoutEffect()
        * useCallback(fn)
        * useMemo(fn)
        * useContext()
        * useRef()
        * useReducer()
    * 自定义hook
        > Hook为一个函数，命名规则以`use`开头
        * useStorage()
    * 第三方hook
        * react-router
        * react-redux
        * antd
        * ...
* 利用useReducer实现简化版redux
    > redux设计三项基本原则之**唯一数据源**，但每次使用useReducer都会创建一份数据，要实现简化版redux，必须只能使用一次useReducer
    * 核心：利用自定义组件Provider+Context实现简化版redux

* React项目
    * 手动配置webpack
        ```js
            import xxx from './store'
            import Home from './views/Home'

            import './style.css'
            import './style.scss'

            require('./assets/logo.png')
            import logo from './assets/logo.png'
        ```
        * 图片地址
            * url-loader + file-loader
                * limit
                * namegit 
    * 脚手架：react-create-app(CRA)
        * 扩展webpack配置
            * npm run eject
            * react-app-rewired（推荐）
                > 2.0+需要customize-cra模块支持
                1. 根目录创建`config.overrides.js`
                    > 配置需要的操作
                2. 修改package.json中的npm script
                    ```js
                        "scripts": {
                            -   "start": "react-scripts start",
                            +   "start": "react-app-rewired start",
                            -   "build": "react-scripts build",
                            +   "build": "react-app-rewired build",
                            -   "test": "react-scripts test --env=jsdom",
                            +   "test": "react-app-rewired test --env=jsdom",
                                "eject": "react-scripts eject"
                        }
                    ```

## day7-2

### 面试题
* hash路由的原理
    > hash: window的hashchange事件，根据window.location.hash值的不同切换相应的页面
    > history: HTML5对history进行了增强，添加一个state状态，根据不同的状态切换相应的页面（history路由需要服务器的支持）
    ```js
        // Vue
        new VueRouter({
            mode:'hash',// history
        })

        // React
        <HashRouter/>
        <BrowserRouter/>
    ```
* setState方法的使用
    ```js
        state = {
            qty:1,
            page:1
        }

        // setState为异步操作
        this.setState({
            page:2
        },()=>{
            // 这里的代码在page修改后执行
            // ajax()
        })
        console.log(this.state.page);// 1

        // setState同步操作
        this.setState((state)=>{
            return {
                page:2
            }
        })
        console.log(this.state.page);// 2
        this.setState((state)=>{
            return {
                page:3
            }
        })
        console.log(this.state.page);//3

        // 函数组件
        function Component(){
            const [page,setPage] = useState(1);
            // 合并操作
            setPage(2)
            setPage(3)
            setPage(4)

            // 以下修改不会合并
            setPage(()=>2)
            setPage(()=>3)
            setPage(()=>4)
        }
    ```

### 知识点
* javascript的特点
    * js是世界上最灵活的语言（js没有类型系统：变量类型校验）
    * js是一门**弱类型**行语言
    * js是一门**动态类型**语言
    * 脚本语言：不需要编译，直接运行
    ```js
        // type     类型
        // script
        
        let price = 10; // number

        price = '100' // string

        // 隐式转换
        price = price - 5; // '10'-5=>5

        // Number.prototype.toFixed
        price.toFixed(2); // '10.00'
    ````
* 了解typescript
    > typescript = javascript + 类型系统 + 新特性
    * 微软出品，它的出现弥补了js语言的不足
    * 静态类型：解决了开发者不小心修改了字段类型/字段个数，而导致项目出现问题的痛点
    * 支持ECMAScript所有特性：始于JavaScript，归于JavaScript
        > 必须编译成js代码才能在浏览器中运行
    * 丰富的配置选项：通过配置选项来规避一些隐藏问题和安全隐患
    * 强大的工具支持：解决了IDE/编辑器无法智能提示的痛点

    ```js
        let price:number = 10;

        price = '100'; // 在编译阶段报错，在开发工具中提示

        function sum(a:number,b:number):number{
            return a + b;
        }
        sum(10,20);//30
        sum('10',20);//报错
    ```
* 使用ts
    * 变量类型
        * 基本类型
            * string
            * number
            * boolean
            * symbol
            * enum      枚举类型
            * never
            * null
            * undefined
            * void      空值
            * any   
        * 函数类型
            * 声明式
            * 赋值式
        * 数组类型
        * 对象类型
            > 接口interface


## day7-5

### 面试题
* 当超过**安全整数**后如何保证运算的正确性
    > 安全整数范围：Number.MIN_SAFE_INTEGER - Number.MAX_SAFE_INTEGER（2**53-1）
    * ES10: BigInt 基本数据类型
    * 数据类型
        * Number        
        * String    
        * Boolean       true,false
        * Null          null
        * Undefined     undefined
        * Symbol        ES6
        * BigInt        ES10
        * Object
* 如何让v-model在一个组件上生效
    ```js
        <mycomponent v-model="qty" />
        // 原理：<mycomponent v-bind:value="qty" v-on:input="value=$event" />

        // 在组件内部触发
        this.$emit('input',2)
    ```

### 知识点
* 项目优化
    * 用户体验优化
    * SEO优化
    * 性能优化
        * 路由懒加载
    ```js
        // 按需引入
        import { Button } from 'antd'
        import 'antd/lib/button/style/index.css'

        // babel插件实现按需加载：.babelrc, babel-loader->options,babel.config.js
        {
            "plugins": [
                ["import", {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    "style": "css" // `style: true` 会加载 less 文件
                    }]
                ]
            }
    ```
* 数据可视化
    > 以图形的方式展示数据，实现统计，对比等效果
    * 实现方式
        * canvas（位图）
        * svg
    * 框架
        * echarts
            > 默认采用canvas实现图表效果
        * highcharts
            > 默认采用svg实现图表效果
    * 开发者必备技能
        * 数据格式化：遍历、创建、删除、匹配
            ```js
                let arr = ['a','b','c']

                let data = [{type:'a'},{type:'d'},{type:'c'}]

                let result = data.filter(item=>arr.includes(item.type))
            ```

## day8-1~day8-2

### 知识点
* 小程序
    * 分类
        * 微信小程序
        * 支付宝小程序
        * 百度小程序
        * 头条（字节跳动）小程序
        * QQ小程序
        * 快应用
        * ...
    * 特点
        > 不需要安装，直接使用，速度快
    * 注册与配置
    * 开发者工具
* 小程序开发
    * 文件类型
        * .json     配置文件
        * .wxss     样式文件（类似与web中的css,兼容大部分css语法）
        * .wxml     结构文件（类似于web中的html）
        * .js       逻辑文件
        * .wxs      模块化脚本文件（类似js）
    * 作用范围
        * 全局文件
            * app.json
            * app.js
            * app.wxss
        * 页面文件
            * [PAGE].json
            * [PAGE].js
            * [PAGE].wxss
    * json配置文件
        * entryPagePath
        * pages
        * window
        * tabBar
            > tabbar页面与非tabbar页面
    * wxss样式文件
        > 微信小程序兼容大部分css语法
        * 增加尺寸单位：rpx
        * 提供了全局的样式和局部样式
        * WXSS 仅支持部分 CSS 选择器
    * wxml结构文件
        * 数据绑定
            * 单向：{{}}
            * 双向
                * 单向（value="{{}}"）+事件（bind:input）
                * model
        * 事件绑定：bind/catch
            * event
            * 传参
                > 采用自定义属性（`data-*`）的方式
        * 条件渲染
            * wx:if
            * wx:else
            * wx:elif
        * 列表渲染
            * wx:for
            * wx:for-item
            * wx:for-index
            * wx:key
                > 与Vue和React不同，Vue和React采用属性值作为key,而在小程序中采用属性名作为key，如果没有唯一属性，则使用`*this`作为key值
    * js逻辑文件
        * 全局文件：`app.js`
            * onLaunch
            * onShow
                > 以上两个生命周期函数都能获取到进入小程序时的场景值与参数
        * 页面文件：`[PAGE].js`
            * onLoad
                * options: 页面参数

