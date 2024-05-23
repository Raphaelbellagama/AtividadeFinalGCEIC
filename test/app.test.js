// test/app.test.js
const request = require('supertest');
const app = require('../app');

describe('POST /api/infs', () => {
    it('should calculate tax correctly', async () => {
        const res = await request(app)
            .post('/api/infs')
            .send({ amount: 100 });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('tax', 10);
    });
});

describe('POST /api/infs/2', () => {
    it('should calculate tax2 correctly', async () => {
        const res = await request(app)
            .post('/api/infs/2')
            .send({ amount: 100 });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('tax', 15);
    });
});
