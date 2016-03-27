import test from 'tape';
import request from 'supertest';
import app from '../server';

test('Correct users returned', t => {
  request(app)
    .get('/api/users')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      const expectedUsers = ['Dave', 'Zoe', 'Scarlett']; 

      t.error(err, 'No error');
      t.same(res.body, expectedUsers, 'Users as expected');
      t.end();
    });
});
