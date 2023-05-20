const express = require('express');
const router = express.Router();
const orderProductRepositoryInjector = require('../routes/DI');
const createOrderProduct_usecase = require('../../application/createOrderProduct/create_order_product_usecase');
const getAllOrderProducts_usecase = require('../../application/getAllOrderProduct/get_all_order_product_usecase');
const getOrderProduct_usecase = require('../../application/getOrderProduct/get_order_product_usecase');

const getAllOrderProducts = async(req, res)=>{
    console.log('getAllOrderProducts: [GET] /order_products/');
    const orderProductRepository = orderProductRepositoryInjector();
    try {
        const orderProducts = await getAllOrderProducts_usecase(orderProductRepository);
        if(orderProducts.error){
            return res.status(400).json({error: orderProducts.error});
        }
        return res.status(200).json({orderProducts});
    } catch (error) {
        return res.status(400).json({error: 'Bad Request'});
    }
}

router.get('/', getAllOrderProducts);

const getOrderProduct = async(req, res)=>{
    console.log('getOrderProduct: [GET] /order_products/:id');
    const orderProductRepository = orderProductRepositoryInjector();
    try {
        const orderProduct = await getOrderProduct_usecase(orderProductRepository, req.body.id);
        if(orderProduct.error){
            return res.status(400).json({error: orderProduct.error});
        }
        return res.status(200).json({orderProduct});
    } catch (error) {
        return res.status(400).json({error: 'Bad Request'});
    }
}

router.get('/:id', getOrderProduct);

const createOrderProduct = async(req, res)=>{
    console.log('createOrderProduct: [POST] /order_products/create');
    const orderProductRepository = orderProductRepositoryInjector();
    try {
        const orderProduct = await createOrderProduct_usecase(orderProductRepository, req.body.quantity, req.body.price, req.body.order_id, req.body.product_id);
        return res.status(200).json({'Message': 'OrderProduct created', 'OrderProduct': orderProduct});
    } catch (error) {
        return res.status(400).json({error: 'Bad Request'});
    }
}

router.post('/create', createOrderProduct);

module.exports = router;