const Sequelize = require('sequelize');
const db = require('../db');

const orderProduct = db.define('orderProduct', {
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    price: {
        type: Sequelize.DECIMAL(10, 2),
        validate: {
            isDecimal: true,
            notNull: true
        }
    }
})

module.exports = orderProduct; 
