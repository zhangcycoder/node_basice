const fs = require('fs')
const path = require('path')
const p = path.join(__dirname, '../', 'data', 'cart.json')
const ProductMode = require('./product')
module.exports = class Cart {
    static add(id) {
        this.get((cartList) => {
            console.log(1, cartList)
            cartList = JSON.parse(JSON.stringify(cartList))
            ProductMode.getProduct(id, (product) => {
                if (!product) return
                let i = cartList.products.findIndex(item => item.id === product.id)
                if (i !== -1) {
                    cartList.products[i].count += 1;
                    cartList.totalPrice = Number(cartList.products[i].price) + Number(cartList.totalPrice)
                    console.log(111, cartList)
                } else {
                    cartList.products.push({
                        ...product,
                        count: 1
                    })
                    cartList.totalPrice = Number(product.price) + Number(cartList.totalPrice)
                }
                cartList.totalPrice.toFixed(2)
                fs.writeFile(p, JSON.stringify(cartList), (err) => { })
            })
        })
    }
    static get(cb) {
        let list = {
            products: [],
            totalPrice: 0
        }
        fs.readFile(p, (err, value) => {
            try {
                const info = JSON.parse(value)
                list = info
                cb(list)
            } catch (err) {
                cb(list)
            }
        })

    }

    static del(id) {
        this.get((info) => {
            let i = info.products.findIndex(item => item.id == id)
            if (i !== -1) {
                info.totalPrice = +info.totalPrice - +(info.products[i].price * info.products[i].count)
                info.products.splice(i, 1)
                fs.writeFile(p, JSON.stringify(info), () => { })
            }
        })
    }
    static sub() {

    }
}