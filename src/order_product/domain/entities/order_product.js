class OrderProduct{
    constructor(quantity, price, order_id, product_id){
        this.quantity = quantity;
        this.price = price;
        this.order_id = order_id;
        this.product_id = product_id;
    }
}

module.exports = OrderProduct;