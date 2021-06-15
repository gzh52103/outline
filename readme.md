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