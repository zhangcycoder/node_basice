const express = require('express')

const { getAllProducts, getCart, getProductDetail, getCheckout, getShopProducts } = require("../controllers/shop")

const router = express.Router()
router.get('/cart', getCart)
router.get('/checkout', getCheckout)
router.get('/productDetail', getProductDetail)
router.get('/productList', getShopProducts)
router.get('/', getAllProducts)

module.exports = router
