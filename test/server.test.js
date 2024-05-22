const request = require('supertest');
const expect = require('chai').expect;
const server = require('../src/server'); 

describe('API /calculate', () => {
    it('should calculate the volume of a cylinder', (done) => {
        request(server)
            .post('/calculate')
            .send({ shape: 'cylinder', radius: 5, height: 10 })
            .end((err, res) => {
                if (err) return done(err);
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('volume');
                expect(res.body.volume).to.be.closeTo(785.398, 0.001);
                done();
            });
    });

    it('should calculate the volume of a cone', (done) => {
        request(server)
            .post('/calculate')
            .send({ shape: 'cone', radius: 5, height: 10 })
            .end((err, res) => {
                if (err) return done(err);
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('volume');
                expect(res.body.volume).to.be.closeTo(261.799, 0.001);
                done();
            });
    });

    it('should throw an error for invalid shape', (done) => {
        request(server)
            .post('/calculate')
            .send({ shape: 'invalid', radius: 5, height: 10 })
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.text).to.equal('Invalid shape');
                done();
            });
    });

    after(() => {
        console.log('Closing server...');
        server.close(() => {
            console.log('Server closed.');
        });
    });
});
