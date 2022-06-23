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
    const { title, price, image, description } = req.body
    if (!title || !price || !image || !description) {
        res.redirect('/admin/add_product')
        return
    }
    req.user.createProduct({
        title: title,
        price: price,
        imageUrl: image,
        description: description,
    }).then(result => {
        res.redirect('/')//重定向 express内部做了

    }).catch(e => {
        console.log(e)
    })
}

// 编辑商品 
exports.getAdminEditProduct = (req, res, next) => {
    req.user.getProducts({ where: { id: req.query.id } })
        .then(products => {
            const product = products[0]
            if (!product) {
                res.redirect('/')
            }
            res.render('admin/edit_product.ejs', {
                pageTitle: "编辑商品",
                path: "/admin/edit_product",
                productDetail: product
            })
        })
        .catch(e => console.log(e))
}

// 删除商品 
exports.setAdminDelProduct = (req, res, next) => {
    const id = req.body.id
    // ProductMode.destroy({where:id})
    ProductMode.findByPk(id).then(product => {
        return product.destroy()
    }).then(result => {
        console.log('删除成功 ')
        res.redirect('/admin/productList')

    }).catch(err => {
        console.log(err)
    })
}
// 编辑商品 
exports.setAdminEditProduct = (req, res, next) => {
    const { title, price, image, description, id } = req.body
    ProductMode.findByPk(id).then(product => {
        product.title = title;
        product.price = price;
        product.imageUrl = image;
        product.description = description;
        return product.save();
    }).then(result => {
        console.log('更新成功')
        res.redirect('/admin/productList')
    }).catch(err => console.log(err, 'err'))
}
exports.getProductList = (req, res, next) => {
    req.user.getProducts().then(result => {
        res.render('admin/productList', {
            products: result,
            pageTitle: '管理产品',
            isActives: true,
            shopCSS: true,
            path: '/admin/productList',
            hasProduct: result.length > 0
        })
    })
}
