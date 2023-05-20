const createOrder_usecase = require('../../application/createOrder/create_order_usecase');
const express = require('express');
const orderRepositoryInjector = require('../routes/DI');
const router = express.Router();
const getAllOrders_usecase = require('../../application/getAllOrders/get_all_orders_usecase');
const getOrder_usecase = require('../../application/getOrder/get_order_usecase');

const getAllOrders = async(req, res)=>{
    console.log('getAllOrders: [GET] /orders/');
    const orderRepository = orderRepositoryInjector();
    try {
        const orders = await getAllOrders_usecase(orderRepository);
        if(orders.error){
            return res.status(400).json({error: orders.error});
        }
        return res.status(200).json({orders});
    } catch (error) {
        return res.status(400).json({error: 'Bad Request'});
    }
}

router.get('/', getAllOrders);

const getOrder = async(req, res)=>{
    console.log('getOrder: [GET] /orders/:id');
    const orderRepository = orderRepositoryInjector();
    try {
        const order = await getOrder_usecase(orderRepository, req.body.id);
        if(order.error){
            return res.status(400).json({error: order.error});
        }
        return res.status(200).json({order});
    } catch (error) {
        return res.status(400).json({error: 'Bad Request'});
    }
}

router.get('/:id', getOrder);

const createOrder = async(req, res)=>{
    console.log('createOrder: [POST] /orders/create');
    const orderRepository = orderRepositoryInjector();
    try {
        const order = await createOrder_usecase(orderRepository, req.body.price, req.body.person_id);
        return res.status(200).json({'Message': 'Order created', 'Order': order});
    } catch (error) {
        return res.status(400).json({error: 'Bad Request'});
    }
}

router.post('/create', createOrder);

module.exports = router;