const express = require('express')
const multer = require('multer')
const path = require('path');
const router = express.Router();

// 1.简单上传：设置上传文件路径
// var upload = multer({ dest: 'uploads/' })
// array()
// single()

// 2. 控制上传细节：配置上传参数
let storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads/'),

    // 格式化文件名
    filename: function (req, file, cb) {
        //  file{originalname,fieldname,size,mime}
        // 获取文件后缀名
        let ext = path.extname(file.originalname);

        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
});
const upload = multer({
    storage,
    // 文件过滤
    fileFilter(req, file, cb){
        let ext = path.extname(file.originalname);
        if(['.jpeg','.png','.gif'].includes(ext)){
            cb(null,true);
        }else{
            cb(JSON.stringify({code:400,msg:`不允许上传${ext}类型文件`}),false)
        }
    },
    limits:{
        // 限制上传文件大小不超过2M
        fileSize:1024*1024*2
    }
});

// /api/upload/avatar
router.post('/avatar', upload.single('avatar'), (req, res) => {
    // single()中间件把单个文件数据格式化到req.file
    console.log('file', req.file);
    console.log('body', req.body);
    res.send('上传成功')
})
router.post('/goods', upload.array('goods'), (req, res) => {
    // array()中间件把多个文件数据格式化到rea.files
    console.log('files', req.files);
    res.send('上传成功')
})


module.exports = router;