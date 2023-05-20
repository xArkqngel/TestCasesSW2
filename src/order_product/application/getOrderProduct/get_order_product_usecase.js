const OrderProduct = require('../../domain/entities/order_product');

const getOrderProductUseCase = async (orderProductRepository, orderProductId) => {
    try{
        const orderProduct = await orderProductRepository.getOrderProduct(orderProductId);
        return orderProduct;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = getOrderProductUseCase;