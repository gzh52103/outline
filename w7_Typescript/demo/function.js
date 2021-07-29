// 函数类型
// * 可选参数：?
// * 默认值：与js一致
// 1. 声明式定义函数
// * 参数类型
// * 返回值类型
function sum(a, b) {
    // let a,b
    return a + b;
}
sum(10, 20);
// sum(10,'20');
// 2.赋值式定义函数
// * 参数类型
// * 返回值类型
// * 变量类型
var getData = function (url, page, size) {
    if (page === void 0) { page = 1; }
};
getData('/api/goods', 1, 10);
getData('/api/goods', 1);
getData('/api/goods');
// 剩余参数：与js一致
function add(a) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return a + rest.reduce(function (prev, item) { return prev + item; }, 0);
}
add(1, 2); //3
add(1, 2, 3); // 6
add(1, 2, 3, 4); // 10
