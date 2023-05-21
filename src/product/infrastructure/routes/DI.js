const ProductReposotoryImpl = require('../repositories/product_repository_impl');
const productRepository = require('../../domain/repositories/product_repository');
const interfaceCheck = require('../../../util/interface_check');

const productRepositoryInjector = () => {
    const productRepositoryImpl = new ProductReposotoryImpl();
    if (!interfaceCheck(productRepositoryImpl, productRepository)) {
        throw new Error('The productRepositoryImpl must implement all the methods of the productRepository interface.');
    }
    return productRepositoryImpl;
}

module.exports = productRepositoryInjector;