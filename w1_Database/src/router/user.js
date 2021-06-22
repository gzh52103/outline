const express = require('express');
// const mysql = require('mysql');
// const query = require('../db/mysql')
const mongo = require('../db/mongo')
const { formatData } = require('../utils')
const router = express.Router();

// 1. 创建连接对象，并配置参数
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'jiaoxue'
// });


// // 获取所有用户
// // get /api/user
// router.get('/', async (req, res) => {
//     // // 连接数据库
//     // connection.connect();

//     // connection.query(`select * from user`, function (error, results, fields) {
//     //     if (error) throw error;
//     //     console.log('The solution is: ', results);
//     //     res.send(results)

//     //     // 关闭连接,释放资源
//     //     connection.end();
//     // })

//     // 回调函数写法
//     // query(`select * from user`,function(result){
//     //     res.send(result)
//     // })

//     // Promise
//     // query(`select * from user`).then((result)=>{
//     //     res.send(result)
//     // })

//     // async & await 
//     const result = await query(`select * from user`)
//     res.send(result)

// });

// router.get('/:id', async (req, res) => {
//     const { id } = req.params

//     const result = await query(`select * from user where id=${id}`)
//     res.send(result[0]);
// })

const colName = 'user'

router.post('/', async (req, res) => {
    const { username, password, role = "member" } = req.body;
    const data = {
        username,
        password,
        role,
        addtime: new Date(),
    }
    const result = await mongo.insert(colName, data);
    if (result) {
        res.send(formatData())
    } else {
        res.send(formatData({ code: 400 }))
    }
})

// 删除用户
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const result = await mongo.remove(colName, { _id: id })
    res.send(formatData({
        code: result ? 200 : 400
    }))
})

// 修改用户
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { password, role, email, nickname } = req.body;
    const result = await mongo.update(colName, { _id: id }, {
        $set: {
            password,
            role,
            email,
            nickname,
        }
    })
    res.send(formatData({
        code: result ? 200 : 400
    }))
})

module.exports = router;