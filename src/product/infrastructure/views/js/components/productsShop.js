async function loadProducts() {
    let jsonArray = null
    try {
        const response = await fetch(`http://127.0.0.1:3001/products`);
        const result = await response.json();
        jsonArray = Object.entries(result.products).map(([key, value]) => ({
            id: value.id,
            name: value.name,
            price: value.price,
            description: value.description
        }));
    } catch (error) {
        console.error(error);
    }
    return jsonArray;
}
async function showProducts() {
    const productListing = document.querySelector('#productListing');
    const jsonArray = await loadProducts();
    jsonArray.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const textBox = document.createElement('div');
        textBox.className = 'text-box';

        const itemName = document.createElement('h2');
        itemName.className = 'item';
        itemName.textContent = product.name;

        const itemPrice = document.createElement('h3');
        itemPrice.className = 'price';
        itemPrice.textContent = `$${product.price}`;

        const itemDescription = document.createElement('p');
        itemDescription.className = 'description';
        itemDescription.textContent = product.description;

        const quantityLabel = document.createElement('label');
        quantityLabel.setAttribute('for', `item-${product.id}-quantity`);
        quantityLabel.textContent = 'Cantidad:';

        const quantityInput = document.createElement('input');
        quantityInput.setAttribute('type', 'text');
        quantityInput.setAttribute('name', `item-${product.id}-quantity`);
        quantityInput.setAttribute('id', `item-${product.id}-quantity`);
        quantityInput.value = '1';
        quantityInput.className = 'quantity-input';

        const addButton = document.createElement('button');
        addButton.setAttribute('type', 'button');
        addButton.setAttribute('name', `item-${product.id}-button`);
        addButton.setAttribute('id', `${product.id}`);
        addButton.setAttribute('onclick', `addToCart(this)`);
        addButton.textContent = 'Añadir a carrito';
        addButton.className = 'button';

        textBox.appendChild(itemName);
        textBox.appendChild(itemPrice);
        textBox.appendChild(itemDescription);
        textBox.appendChild(quantityLabel);
        textBox.appendChild(quantityInput);
        textBox.appendChild(addButton);

        productDiv.appendChild(textBox);
        productListing.appendChild(productDiv);
    });
    const button = document.getElementById("button");
    button.parentNode.removeChild(button);
}
const cart = []
const addToCart = (button) => {
    const buttonId = button.id;
    const input = document.getElementById(`item-${buttonId}-quantity`);
    const quantity = input.value;
    cart.push({id:buttonId,quantity:quantity})
    input.value='1'
    window.alert(cart.length)
}
module.exports = cart;