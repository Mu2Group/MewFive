/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
const request = require('supertest');

const server = 'http://localhost:3000';

describe('Route integration', () => {
  
  describe('GET request to /', () => {
    it('responds with 200 status and text/html content type', async () => {
      const response = await request(server).get('/');
      expect(response.status).toBe(200);
      expect(response.header['content-type']).toContain('application/json');
      // expect('Location').toContain('signup'); checks for redirects?
    });
  });

  describe('POST request to /signup', () => {
    const reqBody = {
      username: 'hulkaroyj', 
      password: '12345',
      firstname: 'Hulkaroy',
      lastname: 'Jouraboeva', 
      email: 'testmail@gmail.com', 
      street: '114 Vermont st', 
      city: 'NYC', 
      state: 'NY', 
      zipcode: '12345',
    };

    it('checks for successful signup', async () => {
      const response = await request(server).post('/signup').send(reqBody);
      expect(response.status).toBe(200);
      expect(response.text).toContain('user signed up!');
      // expect(Object.values(response.body[0]).slice(1)).toEqual(Object.values(reqBody));
    });
  });
  
  describe('POST request to /login', () => {
    const reqBody = {
      username: 'hulkaroyj', 
      password: '12345',
    };
    
    it('tests for successful login', async () => {
      const response = await request(server).post('/login').send(reqBody);
      expect(response.status).toBe(200);
      expect(response.text).toContain('user logged in!');
      // expect(Object.values(response.body[0]).slice(1)).toEqual(Object.values(reqBody));
    });
  });

});
