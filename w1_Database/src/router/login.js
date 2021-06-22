const express = require('express');
const mongo = require('../db/mongo')
const { formatData } = require('../utils')
const router = express.Router();

router.post('/', async (req, res) => {
    const { username, password } = req.body;console.log('username&password',username,password)

    const result = await mongo.find('user', { username, password })
    console.log('result=',result)
    if (result.length > 0) {
        res.send(formatData())
    } else {
        res.send(formatData({ code: 400 }))
    }
})

module.exports = router;