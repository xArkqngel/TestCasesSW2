const orderProductRepositoryImpl = require('../repositories/order_product_repository_impl');
const orderProductRepository = require('../../domain/repositories/order_product_repository');
const interfaceCheck = require('../../../util/interface_check');

const orderProductRepositoryInjector = () => {
    const orderProductRepositoryImpl = new orderProductRepositoryImpl();
    if (!interfaceCheck(orderProductRepositoryImpl, orderProductRepository)) {
        throw new Error('The orderProductRepositoryImpl must implement all the methods of the orderProductRepository interface.');
    }
    return orderProductRepositoryImpl;
}

module.exports = orderProductRepositoryInjector;