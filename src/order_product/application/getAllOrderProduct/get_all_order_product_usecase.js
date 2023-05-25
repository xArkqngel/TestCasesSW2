const OrderProduct = require('../../domain/entities/order_product');

const getAllOrderProductUseCase = async (orderProductRepository) => {
    try{
        const orderProducts = await orderProductRepository.getAllOrderProducts();
        return orderProducts;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = getAllOrderProductUseCase;