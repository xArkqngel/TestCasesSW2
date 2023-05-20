const Sequelize = require('sequelize');
const db = require('../../../util/db');
const OrderProduct = db.define(
    'order_products',
    {
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        quantity:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price:{
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

module.exports = OrderProduct;