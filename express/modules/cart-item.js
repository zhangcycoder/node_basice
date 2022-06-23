const Sequelize = require('sequelize');

const seqielize = require('../utils/database')

const CartItem = seqielize.define('cartItem', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity: Sequelize.INTEGER
})

module.exports = CartItem;