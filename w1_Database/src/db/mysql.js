const mysql = require('mysql');

// 1. 使用连接对象：创建连接对象，并配置参数
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'jiaoxue'
// });

// 封装查询方法
// function query(sql, callback) {
//     connection.connect();
//     connection.query(sql, (err, result) => {
//         connection.end();
//         callback(result)
//     })
// }
// function query(sql) {
//     // 连接数据库
//     connection.connect();
//     const promise = new Promise((resolve,reject)=>{
//         connection.query(sql, (err, result) => {
//             resolve(result)

//             // 关闭连接，释放资源
//             connection.end();
//         })
//     })
//     return promise;
// }

// 2. 使用连接池方式：创建连接池
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'jiaoxue',
    // port: 3306,
    // connectionLimit:20,
    multipleStatements: true
});
function query(sql) {
    const promise = new Promise((resolve,reject)=>{
        pool.query(sql, (err, result) => {
            resolve(result)
        })
    })
    return promise;
}


module.exports = query;