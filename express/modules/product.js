const fs = require('fs')
const path = require('path')
const p = path.join(__dirname, '../data/product.json')

const getProductFromFile = (cb) => {
    fs.readFile(p, (err, flieContent) => {
        try {
            cb(JSON.parse(flieContent))
        } catch (e) {
            cb([])
        }
    })
}
module.exports = class Product {
    constructor({ title, price, image, description }) {
        this.title = title;
        this.price = price;
        this.image = image;
        this.description = description;
    }

    save() {
        getProductFromFile((products) => {
            products.push({ ...this, id: products.length + 1 })
            fs.writeFile(p, JSON.stringify(products), (err, data) => { })
        })
    }
    static editProduct({ id, title, price, image, description }) {
        this.getAll((products) => {
            let list = (products || []).map(item => {
                if (+id === item.id) {
                    return {
                        title: title,
                        price: price,
                        image: image,
                        description: description,
                        id: id
                    }
                } else {
                    return item
                }
            })
            fs.writeFile(p, JSON.stringify(list), (err, data) => { })
        })
    }
    static delProduct(id) {
        getProductFromFile((products) => {
            let newList = products.filter(product => product.id !== +id)
            console.log(newList, id)
            fs.writeFile(p, JSON.stringify(newList), (err, data) => { })
        })
    }
    static getAll(cb) {
        return getProductFromFile(cb)
    }

    static getProduct(id, cb) {
        getProductFromFile((products) => {
            let product = products.filter(product => product.id === +id)[0]
            cb(product)
        })
    }
}