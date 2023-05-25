describe('Usuario', () => {
    describe('Registro de usuario', () => {
        it('Register new User', async () => {
            const response =(await fetch('http://127.0.0.1:3001/persons/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"name": "miguel", "email": "miguel@gmail.com", "password": "123"})
            }));
            const result = await response.json();
            expect(result.Person).toEqual(true);
        });
    });
    describe('Login Usuario', () => {
        it('Login correct', async () => {
            const email = 'admin@gmail.com';
            const password = 'admin';
            const response=(await fetch('http://127.0.0.1:3001/persons/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: email, password: password})
            }));
            const result = await response.json();
            expect(result.Login).toEqual("Success");
        });

        it('Login Incorrect', async () => {
            const email = 'admin@hotmail.com';
            const password = 'admin';
            const response=(await fetch('http://127.0.0.1:3001/persons/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"email": email, "password": password})
            }));
            const result = await response.json();
            expect(result.Login).toEqual(undefined);
        });
    });
});
describe('Productos', () => {
    describe('Registro de productso', () => {
        it('Register new User', async () => {
            const response =(await fetch('http://127.0.0.1:3001/products/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"name": "Guitarra", "price": 150, "description": "Guitarra electrica"})
            }));
            const result = await response.json();
            const expected = { "Message": "Product created" };
            expect(result).toEqual(expected);
        });
    });
});
describe("Test for injection SQL",()=>{
    test('Test for login', async () => {
        const response = await fetch('http://127.0.0.1:3001/persons/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"email": "' OR 1=1--", "password": "anything"}),
        });
        const result = await response.json();
        console.log(result)
        expect(result.Login).toEqual(undefined);
    });

});