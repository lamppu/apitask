const request = require('supertest');
const expect = require('chai').expect;
const app = require('../../server.js');

describe('Testing fetching data with faulty query params', () => {
    it('should return error message "Please provide a valid postal code"', async () => {
        const postalCode = 'koo';
        const res = await request(app).get('/postal_codes/' + postalCode + '/companies');
        expect(res.statusCode).to.equal(404);
        expect(res.body.message).to.equal('Please provide a valid postal code');
    });

    it('should return error message "Invalid Date"', async () => {
        const postalCode = '99999';
        const res = await request(app).get('/postal_codes/' + postalCode + '/companies');
        expect(res.statusCode).to.equal(404);
        expect(res.body.message).to.equal("No data found for selected postal code: " + postalCode);
    });

});

describe('Testing fetching companies data', () => {
    
    it('Response to API request should have statusCode of 200', async () => {
        const postalCode = '01730';
        const res = await request(app).get('/postal_codes/' + postalCode + '/companies');
        expect(res.statusCode).to.equal(200);
    }).timeout(15000);
    it('number of companies in the response should be 20', async () => {
        const postalCode = '00500';
        const res = await request(app).get('/postal_codes/' + postalCode + '/companies');
        expect(res.statusCode).to.equal(200);
        expect(res.body.length).to.equal(20);
    });
})