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

// 增加商品
router.post('/', async (req, res) => {
    const { name, price, imgurl, category, inventory = 10 } = req.body;
    const data = { name, price, imgurl, category, inventory }
    data.addtime = new Date();

    const result = await mongo.insert('goods', data)
    if (result) {
        res.send(formatData())
    } else {
        const data = formatData({
            code: 400,
            msg: '数据添加失败',
        })
        res.send(data)
    }
})


// 商品列表
router.get('/', async (req, res) => {
    const { page, size } = req.query;
    const limit = Number(size);
    const skip = (page - 1) * size

    const data = await mongo.find('goods', {}, { skip, limit })
    res.send({
        code: 200,
        msg: 'success',
        data: data
    });
})

module.exports = router;