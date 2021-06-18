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

### 知识点
* 跨域解决方案
    * jsonp     json with pending
        * 缺点：不是ajax请求而是script请求，只能使用get
    * CORS      cross origin resource sharing