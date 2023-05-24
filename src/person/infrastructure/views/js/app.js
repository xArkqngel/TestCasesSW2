const registerU = async () => {
    const form = document.getElementById('RegForm');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        try {
            await fetch('http://127.0.0.1:3001/persons/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"name":name,"email":email,"password":password})
            });
            form.reset();
            window.location.href="./pages/home.html";
        } catch (error) {
            console.error(error);
            alert('Failed to create person');
        }
    });
}
const loginU = async () =>{
    const form = document.getElementById('LoginForm');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');
        try {
            await fetch('http://127.0.0.1:3001/persons/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"email":email,"password":password})
            });
            form.reset();
            window.location.href="./pages/home.html";
        } catch (error) {
            console.error(error);
            alert('Failed to create person');
        }
    });
}