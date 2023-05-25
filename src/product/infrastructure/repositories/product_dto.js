const Sequelize = require('sequelize');
const db = require('../../../util/db');
const OrderProduct = require('../../../order_product/infrastructure/repositories/order_product_dto');

const Product = db.define(
    'products',
    {
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        price:{
            type: Sequelize.STRING,
            allowNull: false
        },
        description:{
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

module.exports = Product;
