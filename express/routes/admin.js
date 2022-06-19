const path = require('path')
const express = require('express')
const router = express.Router();
const rooterDir = require('../utils/path')
router.use('/add-product', (req, res, next) => {
    res.sendFile(path.join(rooterDir, 'views', 'add_product.html'))
});//添加中间件函数

router.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')//重定向 express内部做了
})
module.exports = router
