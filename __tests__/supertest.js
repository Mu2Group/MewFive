/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
const request = require('supertest');
const fs = require('fs');
const path = require('path');

const server = 'http://localhost:3000';
const testJsonFile = [];

describe('Route integration', () => {
  
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', async () => {
        const response = await request(server).get('/');
        expect(response.status).toBe(200);
        expect(response.header['content-type']).toContain(/text\/html/);
      });
    });
  });

});
