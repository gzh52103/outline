// 每个模块的作用域都是独立的，外部无法访问模块内的变量，除非导出
const username = 'tiantian';
const fs = require('fs');

exports.a = 10;
exports.b = 20;

// module.exports会覆盖exports导出的内容
module.exports = {
    username,
    age:20,
}