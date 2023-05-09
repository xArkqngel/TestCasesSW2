import app from '../index.js';
import {loginF} from "../views/js/personAPI";
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
describe('loginF function', () => {
    const mockUser = { mail: 'testuser', password: 'testpassword' };
    test('should return true on successful login', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({ ok: true })
        );
        const result = await loginF(mockUser);
        expect(result).toBe(true);
    });
    test('should return false on failed login', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({ ok: false })
        );
        const result = await loginF(mockUser);
        expect(result).toBe(false);
    });
});