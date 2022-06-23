const Sequelize = require('sequelize');

const seqielize = require('../utils/database')

const Order = seqielize.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

module.exports = Order;