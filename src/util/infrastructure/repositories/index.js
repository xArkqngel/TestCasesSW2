const Order = require('../../../order/infrastructure/repositories/order_dto');
const Product = require('../../../product/infrastructure/repositories/product_dto');
const OrderProduct = require('../../../order_product/infrastructure/repositories/order_product_dto');

Order.belongsToMany(Product, {through: OrderProduct});
Product.belongsToMany(Order, {through: OrderProduct});

module.exports = {
    Order,
    Product,
    OrderProduct
};