const chai = require('chai');
const expect = chai.expect;
const fetchMock = require('fetch-mock/es5/client');

describe('loginUser', () => {
    it('should return true for successful login', async () => {
        // Set up the mock response
        fetchMock.post('http://127.0.0.1:3001/persons/login', { ok: true });

        // Call the function and expect a successful login
        const result = await loginUser();
        expect(result).to.be.true;
    });

    it('should return false for failed login', async () => {
        // Set up the mock response
        fetchMock.post('http://127.0.0.1:3001/persons/login', { ok: false });

        // Call the function and expect a failed login
        const result = await loginUser();
        expect(result).to.be.false;
    });
});
