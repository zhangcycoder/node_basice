const express = require('express')

const { getAllProducts, getCart, setdelcart, getProductDetail, getCheckout, getShopProducts, setAddcart, createOrder, getOrders } = require("../controllers/shop")

const router = express.Router()
router.get('/cart', getCart)
router.get('/checkout', getCheckout)
router.get('/order', getOrders)
router.post('/create-order', createOrder)
router.get('/productDetail/:productId', getProductDetail)
router.get('/productList', getShopProducts)
router.post('/api/Addcart/:productId', setAddcart)
router.post('/api/delProduct/:productId', setdelcart)
router.get('/', getAllProducts)

module.exports = router
