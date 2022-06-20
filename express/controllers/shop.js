const ProductMode = require('../modules/product')

// 商店 
exports.getAllProducts = (req, res, next) => {
    ProductMode.getAll((products) => {
        res.render('shop/index', {
            products: products,
            pageTitle: '产品',
            isActives: true,
            shopCSS: true,
            path: '/',
            hasProduct: products.length > 0
        })
    })
}
// 全部产品页面
exports.getShopProducts = (req, res, next) => {
    ProductMode.getAll((products) => {
        res.render('shop/productList', {
            products: products,
            pageTitle: '产品',
            isActives: true,
            shopCSS: true,
            path: '/productList',
            hasProduct: products.length > 0
        })
    })
}

// 购物车
exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: "购物车",
        path: "/cart"
    })
}
// 结算页
exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: "结算",
        path: "shop/checkout"
    })
}

// 结算页
exports.getProductDetail = (req, res, next) => {
    res.render('shop/product_detail', {
        pageTitle: "商品详情",
        path: "shop/product_detail"
    })
}