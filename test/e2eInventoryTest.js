const request = require('supertest');
const app = require('../index');

describe('Book inventory', function () {
    it('allows to stock up the items', function (done) {
        request(app)
            .post('/stock')
            .send({ isbn: '1213214334324', count: 10 })
            .expect({ isbn: '1213214334324', count: 10 }, done); // 'done' dla kodu asynchronicznego - patrz tez argument funkcji
    });
});