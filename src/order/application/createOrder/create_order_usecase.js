const Order = require('../../domain/entities/order');

const createOrderUseCase = async (orderRepository, price, person_id) => {
    try{
        const order = new Order(price, person_id);
        await orderRepository.createOrder(order);
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = createOrderUseCase;