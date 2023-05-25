const OrderProduct = require('../../../util/infrastructure/repositories/index').OrderProduct;

class orderProductRepositoryImpl{
    constructor(){
    }

    async createOrderProduct(orderProduct){
        console.log('createOrderProduct: [POST] /order_products/');
        console.log('orderProduct : ', orderProduct);
        try {
            const ORDER_PRODUCT_MODEL = {
                quantity: orderProduct.quantity,
                price: orderProduct.price,
                order_id: orderProduct.order_id,
                product_id: orderProduct.product_id
            };
            try {
                const orderProduct = await OrderProduct.create(ORDER_PRODUCT_MODEL);
                console.log('Ok createOrderProduct: ', {orderProduct});
                return (orderProduct);
            } catch (error) {
                console.log('Error in createOrderProduct: ' + 'orderProduct: ', error);
                return {error: error};
            }
        } catch (error) {
            return {error: 'Bad Request'};
        }
    }

    async getAllOrderProducts(){
        console.log('getAllOrderProducts: [GET] /order_products/');
        try {
            const allOrderProducts = await OrderProduct.findAll();
            console.log('OK getAllOrderProducts: ', allOrderProducts.map(orderProducts => orderProducts.dataValues));
            return allOrderProducts;
        } catch (error) {
            console.log('Error in getAllOrderProducts ' + 'OrderProducts:', error);
            return error;
        }
    }

    async getOrderProduct(id){
        console.log('getOrderProduct: [GET] /order_products/:id');
        console.log('orderProductId :', id);
        try{
            const orderProduct = await OrderProduct.findByPk(id);
            console.log('Ok getOrderProduct: ', {orderProduct});
            return (orderProduct);
        }catch (error){
            console.log('Error in get OrderProduct: ' + 'OrderProduct:', error);
            return { error: error};
        }
    }
    
}

module.exports = orderProductRepositoryImpl;