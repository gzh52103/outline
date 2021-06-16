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

* express
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