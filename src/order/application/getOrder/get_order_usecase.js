const Order = require('../../domain/entities/order');

const getOrderUseCase = async (orderRepository, orderId) => {
    try{
        const order = await orderRepository.getOrder(orderId);
        return order;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = getOrderUseCase;