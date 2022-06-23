const Sequelize = require('sequelize');

const seqielize = require('../utils/database')

const OrderItem = seqielize.define('orderItem', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity: Sequelize.INTEGER
})

module.exports = OrderItem;