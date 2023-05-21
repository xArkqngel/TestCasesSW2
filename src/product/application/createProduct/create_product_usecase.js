const Product = require('../../domain/entities/product');

const createProductUseCase = async (productRepository, name, price, description) => {
    try{
        const product = new Product(name, price, description);
        await productRepository.createProduct(product);
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = createProductUseCase;
