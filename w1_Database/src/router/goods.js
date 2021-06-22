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

router.post('/',async (req,res)=>{
    const result = await mongo.insert('goods',{name:'goods1',price:100,imgurl:''})
    // mongo.insert('goods',[{name:'goods1',price:100,imgurl:''},{name:'goods2',price:200,imgurl:''},{name:'goods3',price:100,imgurl:''}])
    if(result){
        res.send('数据添加成功')
    }else{
        res.send('数据添加失败')
    }
})


// 商品列表
router.get('/',async (req,res)=>{
    const {page,size} = req.query;
    const limit = Number(size);
    const skip = (page-1)*size

    const data = await mongo.find('goods',{},{skip,limit})
    res.send(data);
})

module.exports = router;