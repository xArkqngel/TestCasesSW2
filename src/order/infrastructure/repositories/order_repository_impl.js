
const Order = require('../../../util/infrastructure/repositories/index').Order;

class OrderRepositoryImpl{
    constructor(){
    }
    
    async getOrder(id){
        console.log('getOrder: [GET] /orders/:id');
        console.log('orderId :', id);
        try{
            const order = await Order.findOne({where:{id}});
            console.log('Ok getOrder: ', {order});
            return (order);
        }catch (error){
            console.log('Error in get Order: ' + 'Order:', error);
            return { error: error};
        }
    }

    async getAllOrders(){
        console.log('getAllOrders: [GET] /orders/');
        try {
            const allOrders = await Order.findAll();
            console.log('OK getAllOrders: ', allOrders.map(orders => orders.dataValues));
            return allOrders;
        } catch (error) {
            console.log('Error in getAllOrders ' + 'Orders:', error);
            return error;
        }
    }

    async createOrder(order){
        console.log('createOrder: [POST] /orders/');
        console.log('order : ', order);
        try {
            const ORDER_MODEL = {
                price: order.price,
                person_id: order.person_id
            };
            try {
                const order = await Order.create(ORDER_MODEL);
                console.log('Ok createOrder: ', {order});
                return (order);
            } catch (error) {
                console.log('Error in createOrder: ' + 'order: ', error);
                return {error: error};
            }
        } catch (error) {
            return {error: 'Bad Request'};
        }
    }

}

module.exports = OrderRepositoryImpl;
