async function loadProducts() {
    const products = [];
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        json.forEach(product => {
            const { title, price, description } = product;
            products.push({ "name":title, "price":price, "description":description });
        });
    } catch (error) {
        console.log('Error loading products:', error);
    }

    return products;
}
async function addToDB() {
    const products = await loadProducts()
    for (let i = 0; i < products.length; i++) {
        try {
            await fetch('http://127.0.0.1:3001/products/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(products[i])
            });
        } catch (error) {
            console.error(error);
            alert('Failed to create product');
        }
    }
}
async function loadProductsSpanish() {
    const products = [
        {
            name: "iPhone 12",
            price: 999.99,
            descripction: "Nuevo iPhone 12 con pantalla Super Retina XDR de 6.1 pulgadas"
        },
        {
            name: "Samsung Galaxy S21",
            price: 899.99,
            descripction: "Potente smartphone Samsung Galaxy S21 con pantalla Dynamic AMOLED de 6.2 pulgadas"
        },
        {
            name: "MacBook Pro",
            price: 1999.99,
            descripction: "Laptop MacBook Pro con procesador Intel Core i7 y pantalla Retina de 13 pulgadas"
        },
        {
            name: "Canon EOS R5",
            price: 3499.99,
            descripction: "Cámara profesional Canon EOS R5 con sensor CMOS de 45 megapíxeles y grabación de video 8K"
        },
        {
            name: "Sony PlayStation 5",
            price: 499.99,
            descripction: "Consola de videojuegos Sony PlayStation 5 con gráficos de última generación y capacidad de 4K"
        }
    ];
    for (let i = 0; i < products.length; i++) {
        try {
            await fetch('http://127.0.0.1:3001/products/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(products[i])
            });
        } catch (error) {
            console.error(error);
            alert('Failed to create product');
        }
    }
}
