const ProductMode = require('../modules/product');
const CartMode = require('../modules/cart');
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
    const productId = req.params.productId;
    let fetcheaCart;
    let newQuantity = 1;
    req.user.getCart().then(cart => {
        fetcheaCart = cart
        return cart.getProducts({ where: { id: productId } })
    }).then(products => {
        let product;
        if (products && products.length) {
            product = products[0]
        }
        if (product) {
            const oldQuantity = product.cartItem.quantity;
            newQuantity = oldQuantity + 1
            return product
        }
        return ProductMode.findByPk(productId)
    })
        .then((product) => {
            return fetcheaCart.addProduct(product, { through: { quantity: newQuantity } })
        }).then(() => {
            res.redirect('/cart')
        })
}

exports.getOrders = (req, res) => {
    req.user.getOrders({ include: ['products'] }).then(orders => {
        console.log(orders, 'orders')
        res.render('shop/order', {
            path: '/order',
            pageTitle: "我的订单",
            orders: orders
        })
    })
}

exports.createOrder = (req, res, next) => {
    let fetchCart;
    req.user.getCart().then(cart => {
        fetchCart = cart
        return cart.getProducts()
    }).then(products => {
        return req.user.createOrder().then(order => {
            return order.addProducts(products.map(product => {
                product.orderItem = { quantity: product.cartItem.quantity }
                return product
            }))
        })
    }).then(result => {
        fetchCart.setProducts(null)
        res.redirect('/cart')
    })
}
exports.setdelcart = (req, res, next) => {
    const productId = req.params.productId
    req.user.getCart().then(cart => {
        return cart.getProducts({ where: { id: productId } })
    }).then(products => {
        const product = products[0]
        return product.cartItem.destroy()
    }).then(result => {
        res.redirect('/cart')
    })
}

// 购物车
exports.getCart = (req, res, next) => {
    req.user.getCart().then(result => {
        return result.getProducts().then(products => {
            res.render('shop/cart', {
                pageTitle: "购物车",
                path: "/cart",
                products: products,
                totalPrice: 0,
                hasProduct: products.length
            })
        }).catch(e => console.log(e, 'e111'))
    }).catch(e => {
        res.render('shop/cart', {
            pageTitle: "购物车",
            path: "/cart",
            products: [],
            totalPrice: 0,
            hasProduct: false
        })
        console.log(e, 'e')
    })
}
// 结算页
exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: "结算",
        path: "shop/checkout"
    })
}

// 商品详情
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