const loadProducts = async ()=>{
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(async json => {
            window.alert("AC")
            json.forEach(item => {
                addToDB({"name":item.name,"price":item.price,"description":item.description});
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}
const addToDB = async (product)=>{
    try {
        await fetch('http://127.0.0.1:3001/products/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
    } catch (error) {
        console.error(error);
        alert('Failed to create product');
    }
}

