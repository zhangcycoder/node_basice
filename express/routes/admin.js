const path = require('path')
const express = require('express')
const router = express.Router();

const rooterDir = require('../utils/path')

const products = []

router.use('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rooterDir, 'views', 'add_product.html'))
    res.render('add_product', { pageTitle: "新增产品", path: "/admin/add_product" })
});//添加中间件函数

router.post('/product', (req, res, next) => {
    products.push(req.body)
    res.redirect('/')//重定向 express内部做了
})
module.exports = {
    adminRoutes: router,
    products: products
}
