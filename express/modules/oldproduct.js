const db = require('../utils/database')
module.exports = class Product {
    constructor({ title, price, image, description }) {
        this.title = title;
        this.price = price;
        this.imageUrl = image;
        this.description = description;
    }

    save() {
        return db.execute('INSERT INTO test_product (title, price,  imageUrl, description) VALUES (?, ?, ?, ?)',
            [this.title, this.price, this.imageUrl, this.description]
        )
    }
    static editProduct({ id, title, price, image, description }) {

    }
    static delProduct(id) {

    }
    static getAll() {
        return db.execute('SELECT * FROM test_product')
    }

    static getProduct() {
    }
    static findById(id) {
        return db.execute('SELECT *  FROM  test_product  WHERE test_product.id  =  ?', [id])
    }
}
// 简化sql语句 关联不同表