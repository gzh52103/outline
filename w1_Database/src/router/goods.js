const express = require('express');
// const query = require('../db/mysql')
const mongo = require('../db/mongo')

const router = express.Router();

// router.use('/', async (req, res) => {
//     const { page = 1, size = 10, order } = req.query;
//     const index = (page-1)*size

//     // 拼接sql语句
//     const sql = `select * from goods`
//     if(order){
//         sql += ` order by ${order}`
//     }
//     sql += ` limit ${index},${size}`
//     const result = await query(sql)
//     res.send(result);
// });

// router.use('/search', async (req, res) => {
//     const { keyword, page = 1, size = 10 } = req.query;
//     const index = (page-1)*size

//     const sql = `select * from goods where name like %${keyword}%  limit ${index},${size}`

//     const result = await query(sql)
//     res.send(result);
// });


// 商品列表
router.get('/',async (req,res)=>{
    const data = await mongo.find('goods',{})
    res.send(data);
})

module.exports = router;