const Sequelize = require('sequelize');
const db = require('../../../util/db');
const Order = require('../../../order/infrastructure/repositories/order_dto');
const Product = require('../../../product/infrastructure/repositories/product_dto');

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

OrderProduct.belongsTo(Order,{foreignKey:'order_id'});
OrderProduct.belongsTo(Product,{foreignKey:'product_id'});

module.exports = OrderProduct;