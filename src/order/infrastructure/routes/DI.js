const OrderRepositoryImpl = require('../repositories/order_repository_impl');
const orderRepository = require('../../domain/repositories/order_repository');
const interfaceCheck = require('../../../util/interface_check');

const orderRepositoryInjector = () => {
    const orderRepositoryImpl = new OrderRepositoryImpl();
    if (!interfaceCheck(orderRepositoryImpl, orderRepository)) {
        throw new Error('The orderRepositoryImpl must implement all the methods of the orderRepository interface.');
    }
    return orderRepositoryImpl;
}

module.exports = orderRepositoryInjector;