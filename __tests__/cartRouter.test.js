const request = require('supertest');

const server = 'http://localhost:3000';

describe('Cart Route Integration', () => {
  describe('POST request to cart/:userID/:productID', () => {
    const reqBody = { quantity: 3 };
    it('tests for a successful "add product to cart"', async () => {
      const response = await request(server).post('/cart/6/2').send(reqBody);
      expect(response.status).toBe(200);
    });
    it('check if the body of the request was posted', async () => {
      const response = await request(server).post('/cart/6/2').send(reqBody);
      expect(response.body.quantity).toEqual(reqBody.quantity);
    });
  });

  describe('GET request to cart/:userID', () => {
    it('gets the products of user\'s cart', async () => {
      const response = await request(server).get('/cart/4');
      console.log('RESPONSE STATUSSSSSS: ', response.status);
      expect(response.status).toBe(200);
    });
  });

  // describe('PUT request to cart/:userID/:productID', () => {
  //   it('tests for a successful "update product in the cart"', async () => {
  //     const response = await request(server).put('cart/:userID/:productID').send(reqBody);
  //     expect(response.status).toBe(200);
  //   });
  // });

  // describe('DELETE request to cart/:userID/:productID', () => {
  //   it('tests for a successful "product deletion in the cart"', async () => {
  //     const response = await request(server).delete('cart/:userID/:productID').send(reqBody);
  //     expect(response.status).toBe(200);
  //   });
  // });
});
