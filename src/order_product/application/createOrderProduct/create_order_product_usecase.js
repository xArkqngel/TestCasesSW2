const OrderProduct = require('../../domain/entities/order_product');

const createOrderProductUseCase = async (orderProductRepository, quantity, price, order_id, product_id) => {
    try{
        const orderProduct = new OrderProduct(quantity, price, order_id, product_id);
        await orderProductRepository.createOrderProduct(orderProduct);
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = createOrderProductUseCase;