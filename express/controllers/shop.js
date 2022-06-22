const ProductMode = require('../modules/product');
const CartMode = require('../modules/cart')
// 商店 
exports.getAllProducts = (req, res, next) => {
    ProductMode.findAll().then(rows => {
        res.render('shop/index', {
            products: rows,
            pageTitle: '产品',
            isActives: true,
            shopCSS: true,
            path: '/',
            hasProduct: rows.length > 0
        })
    }).catch(err => console.log(err, 'err'))
}
// 全部产品页面
exports.getShopProducts = (req, res, next) => {
    ProductMode.findAll().then(rows => {
        res.render('shop/productList', {
            products: rows,
            pageTitle: '产品',
            isActives: true,
            shopCSS: true,
            path: '/productList',
            hasProduct: rows.length > 0
        })
    }).catch(err => console.log(err, 'err'))
}

exports.setAddcart = (req, res, next) => {
    CartMode.add(req.params.productId)
    res.redirect('/productList')
}

exports.setdelcart = (req, res, next) => {
    CartMode.del(req.params.productId)
    res.redirect('/cart')
}

// 购物车
exports.getCart = (req, res, next) => {
    CartMode.get((info) => {
        res.render('shop/cart', {
            pageTitle: "购物车",
            path: "/cart",
            products: info.products,
            totalPrice: info.totalPrice || 0,
            hasProduct: info.products.length
        })
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
    const prodId = req.params.productId;
    ProductMode.findByPk(prodId).then(rows => {
        res.render('shop/product_detail', {
            pageTitle: "商品详情",
            path: "shop/product_detail",
            product: rows,
        })
    }).catch(err => console.log(err, 'err'))
}