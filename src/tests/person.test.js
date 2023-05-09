import app from '../index.js';
import request from 'supertest';

describe('Test the GET methods', () => {
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
});
