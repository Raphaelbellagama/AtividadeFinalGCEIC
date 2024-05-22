const request = require('supertest');
const app = require('../src/server');

describe('POST /calculate', () => {
    it('should calculate volume of a cylinder', async () => {
        const res = await request(app)
            .post('/calculate')
            .send({ shape: 'cylinder', radius: 5, height: 10 });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('volume');
        expect(res.body.volume).toBeCloseTo(785.398);
    });

    it('should calculate volume of a cone', async () => {
        const res = await request(app)
            .post('/calculate')
            .send({ shape: 'cone', radius: 5, height: 10 });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('volume');
        expect(res.body.volume).toBeCloseTo(261.799);
    });

    it('should return 400 for invalid shape', async () => {
        const res = await request(app)
            .post('/calculate')
            .send({ shape: 'invalid', radius: 5, height: 10 });
        expect(res.statusCode).toEqual(400);
        expect(res.text).toBe('Invalid shape');
    });
});
