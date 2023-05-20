const Order = require('../../domain/entities/order');

const getAllOrdersUseCase = async (orderRepository) => {
    try{
        const orders = await orderRepository.getAllOrders();
        return orders;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = getAllOrdersUseCase;