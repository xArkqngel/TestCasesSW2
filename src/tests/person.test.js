import app from '../index.js';
import {loginF} from "../views/js/login";
import {registerF} from "../views/js/login";
import request from 'supertest';
/**describe('Test the GET methods', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/persons');
        expect(response.statusCode).toBe(200);
    });
});


describe('Test the POST methods', () => {
    test('It should response the POST method, fail due to empty data', async () => {
        const response = await request(app).post('/persons/create');
        expect(response.statusCode).toBe(400);
    });
});*/
describe('Test for Register', () => {
    test('Mail invalid', async () => {
        const user = {
            name: 'b',
            email: 'b@gmail',
            password: 'Password123'
        };
        await expect(registerF(user)).rejects.toThrow('Invalid email address');
    });

    test('Password Invalid', async () => {
        const user = {
            name: 'b',
            email: 'b@gmail.com',
            password: 'password'
        };
        await expect(registerF(user)).rejects.toThrow('Password incorrect');
    });

    test('Register Successful', async () => {
        const user = {
            name: 'b',
            email: 'b@gmail.com',
            password: 'Password123'
        };
        const result = await registerF(user);
        expect(result).toBe(true);
    });
});


describe('Test for login',() =>{
    test('successful login', async () => {
        const result = await loginF({ email: 'a@gmail.com', password: 'Password123' });
        expect(result).toBe(true);
    });

    test('failed login with password', async () => {
        const result = await loginF({ email: 'a@gmail.com', password: 'wrongpassword' });
        expect(result).toBe(false);
    });
    test('failed login with mail', async () => {
        const result = await loginF({ email: 'admin', password: 'Password123' });
        expect(result).toBe(false);
    });
    test('failed login', async () => {
        const result = await loginF({ email: 'admin', password: 'wrongpassword' });
        expect(result).toBe(false);
    });
});
