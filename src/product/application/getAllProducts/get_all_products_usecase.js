const Product = require('../../domain/entities/product');

const getAllProductsUseCase = async (productRepository) => {
    try{
        const products = await productRepository.getAllProducts();
        return products;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = getAllProductsUseCase;