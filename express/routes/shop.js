const path = require('path')

const express = require('express')

const rooterDir = require('../utils/path')
const adminData = require('./admin')

const router = express.Router()
router.get('/', (req, res, next) => {
    const products = adminData.products;
    // res.render('shop', { products: products, pageTitle: '我的商店', path: '/', hasProduct: products.length > 0 })
    res.render('shop', { products: products, pageTitle: '我的商店', isActives: true, shopCSS: true, path: '/', hasProduct: products.length > 0 })
})
module.exports = router
