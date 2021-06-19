const express = require('express');
// const mysql = require('mysql');
const query = require('../db/mysql')
const router = express.Router();

// 1. 创建连接对象，并配置参数
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'jiaoxue'
// });


// 获取所有用户
// get /api/user
router.get('/', async (req, res) => {
    // // 连接数据库
    // connection.connect();

    // connection.query(`select * from user`, function (error, results, fields) {
    //     if (error) throw error;
    //     console.log('The solution is: ', results);
    //     res.send(results)

    //     // 关闭连接,释放资源
    //     connection.end();
    // })

    // 回调函数写法
    // query(`select * from user`,function(result){
    //     res.send(result)
    // })

    // Promise
    // query(`select * from user`).then((result)=>{
    //     res.send(result)
    // })

    // async & await 
    const result = await query(`select * from user`)
    res.send(result)

});

router.get('/:id', async (req, res) => {
    const { id } = req.params

    const result = await query(`select * from user where id=${id}`)
    res.send(result[0]);
})

module.exports = router;