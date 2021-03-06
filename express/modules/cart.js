const Sequelize = require('sequelize');

const seqielize = require('../utils/database')

const Cart = seqielize.define('cart', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

module.exports = Cart;