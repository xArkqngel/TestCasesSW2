const express = require('express');
const router = express.Router();
const productRepositoryInjector = require('../routes/DI');
const getAllProducts_usecase = require('../../application/getAllProducts/get_all_products_usecase');
const getProduct_usecase = require('../../application/getProduct/get_product_usecase');
const createProduct_usecase = require('../../application/createProduct/create_product_usecase');

const getAllProducts = async(req, res)=>{
    console.log('getAllProducts: [GET] /products/');
    const productRepository = productRepositoryInjector();
    try {
        const products = await getAllProducts_usecase(productRepository);
        if(products.error){
            return res.status(400).json({error: products.error});
        }
        return res.status(200).json({products});
    } catch (error) {
        return res.status(400).json({error: 'Bad Request'});
    }
}

router.get('/', getAllProducts);

const getProduct = async(req, res)=>{
    console.log('getProduct: [GET] /products/:id');
    const productRepository = productRepositoryInjector();
    try {
        const product = await getProduct_usecase(productRepository, req.body.id);
        if(product.error){
            return res.status(400).json({error: product.error});
        }
        return res.status(200).json({product});
    } catch (error) {
        return res.status(400).json({error: 'Bad Request'});
    }
}

router.get('/:id', getProduct);

const createProduct = async(req, res)=>{
    console.log('createProduct: [POST] /products/create');
    const productRepository = productRepositoryInjector();
    try {
        const product = await createProduct_usecase(productRepository, req.body.name, req.body.price, req.body.description);
        return res.status(200).json({'Message': 'Product created', 'Product': product});
    } catch (error) {
        return res.status(400).json({error: 'Bad Request'});
    }
}

router.post('/create', createProduct);

module.exports = router;