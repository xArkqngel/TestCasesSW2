const Sequelize = require('sequelize');
const db = require('../../../util/db');
const OrderProduct = require('../../../order_product/infrastructure/repositories/order_product_dto');
const Order = db.define(
    'orders',
    {
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        price:{
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

//TODO: Order has many
Order.hasMany(OrderProduct, {foreignKey: 'order_id'});
OrderProduct.belongsTo(Order, {foreignKey: 'order_id'});

module.exports = Order;