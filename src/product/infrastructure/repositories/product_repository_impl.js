const Product = require('../repositories/product_dto');

class orderProductRepositoryImpl{
    constructor(){
    }

    async createProduct(product){
        console.log('createProduct: [POST] /products/');
        console.log('product : ', product);
        try {
            const PRODUCT_MODEL = {
                name: product.name,
                price: product.price,
                description: product.description
            };
            try {
                const product = await Product.create(PRODUCT_MODEL);
                console.log('Ok createProduct: ', {product});
                return (product);
            } catch (error) {
                console.log('Error in createProduct: ' + 'product: ', error);
                return {error: error};
            }
        }
        catch (error) {
            return {error: 'Bad Request'};
        }
    }

    async getAllProducts(){
        console.log('getAllProducts: [GET] /products/');
        try {
            const allProducts = await Product.findAll();
            console.log('OK getAllProducts: ', allProducts.map(products => products.dataValues));
            return allProducts;
        } catch (error) {
            console.log('Error in getAllProducts ' + 'Products:', error);
            return error;
        }
    }

    async getProduct(id){
        console.log('getProduct: [GET] /products/:id');
        console.log('productId :', id);
        try{
            const product = await Product.findOne({where:{id}});
            console.log('Ok getProduct: ', {product});
            return (product);
        }catch (error){
            console.log('Error in get Product: ' + 'Product:', error);
            return { error: error};
        }
    }
}

module.exports = orderProductRepositoryImpl;