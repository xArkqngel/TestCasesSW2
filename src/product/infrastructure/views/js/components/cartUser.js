const cart = require ("./productsShop");
function test(){
    console.log(cart.length)
}
test()
function showCart() {
    window.alert(cart)
    const productTable = document.querySelector('#order');

    cart.forEach(product => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'description';
        const nameSpan = document.createElement('span');
        nameSpan.textContent = product.id;
        const detailsSpan = document.createElement('span');
        detailsSpan.textContent = 'product.description';
        descriptionDiv.appendChild(nameSpan);
        descriptionDiv.appendChild(detailsSpan);

        const quantityDiv = document.createElement('div');
        quantityDiv.className = 'quantity';
        const plusButton = document.createElement('button');
        plusButton.className = 'plus-btn';
        plusButton.setAttribute('type', 'button');
        plusButton.setAttribute('name', 'button');
        plusButton.textContent = '+';
        const quantityInput = document.createElement('input');
        quantityInput.setAttribute('type', 'text');
        quantityInput.setAttribute('name', 'name');
        quantityInput.value = product.quantity;

        const minusButton = document.createElement('button');
        minusButton.className = 'minus-btn';
        minusButton.setAttribute('type', 'button');
        minusButton.setAttribute('name', 'button');
        minusButton.textContent = '-';

        quantityDiv.appendChild(plusButton);
        quantityDiv.appendChild(quantityInput);
        quantityDiv.appendChild(minusButton);

        const totalPriceDiv = document.createElement('div');
        totalPriceDiv.className = 'total-price';
        //totalPriceDiv.textContent = `$${product.price}`;
        totalPriceDiv.textContent = `$10`;

        itemDiv.appendChild(descriptionDiv);
        itemDiv.appendChild(quantityDiv);
        itemDiv.appendChild(totalPriceDiv);

        productTable.appendChild(itemDiv);
    });
}