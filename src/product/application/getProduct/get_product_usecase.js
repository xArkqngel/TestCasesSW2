const Product = require('../../domain/entities/product');

const getProductUseCase = async (productRepository, productId) => {
    try{
        const product = await productRepository.getProduct(productId);
        return product;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = getProductUseCase;