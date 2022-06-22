const ProductMode = require('../modules/product')

//增加产品页面
exports.getAddProducts = (req, res, next) => {
    res.render('admin/add_product', {
        pageTitle: "新增产品",
        productCSS: true,
        path: "/admin/add_product",
    })
}
// 新增产品接口
exports.setPostProducts = (req, res, next) => {
    if (!req.body.title || !req.body.price || !req.body.image || !req.body.description) {
        res.redirect('/admin/add_product')
        return
    }
    const product = new ProductMode(req.body)
    product.save().then(sult => {
        res.redirect('/')//重定向 express内部做了
    }).catch(e => console.log(e, 'ee'))
}

// 编辑商品 
exports.getAdminEditProduct = (req, res, next) => {
    let id = req.query.id
    ProductMode.getProduct(id, (value) => {
        if (value) {
            res.render('admin/edit_product.ejs', {
                pageTitle: "编辑商品",
                path: "/admin/edit_product",
                productDetail: value
            })
        }
    })
}

// 删除商品 
exports.setAdminDelProduct = (req, res, next) => {
    ProductMode.delProduct(req.body.id)
    res.redirect('/admin/productList')
}
// 编辑商品 
exports.setAdminEditProduct = (req, res, next) => {
    ProductMode.editProduct(req.body)
    res.redirect('/admin/productList')
}
exports.getProductList = (req, res, next) => {
    ProductMode.getAll().then(([products, file]) => {
        res.render('admin/productList', {
            products: products,
            pageTitle: '产品',
            isActives: true,
            shopCSS: true,
            path: '/admin/productList',
            hasProduct: products.length > 0
        })
    })
}
