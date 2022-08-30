const express = require('express');
const cartController = require('../controllers/cartController');
const cartRouter = express.Router();

//update endpoints here
//remove user id and use cookie ssid
//add cookie controller get cookie ssid and add as middleware 

// get user cart WORKS
cartRouter.get('/:userID', cartController.getProducts, (req, res) => {
    return res.status(200).send(res.locals.cart);
  });

// add product to cart WORKS
cartRouter.post('/:userID/:productID', cartController.addProduct, (req,res) => {
    return res.status(200).send(res.locals.addedProduct);
});

//update quantity of item in cart WORKS
cartRouter.put('/:userID/:productID', cartController.updateCart, (req,res) => {
    return res.status(200).send(res.locals.updatedCartItem);
});

//delete product from cart WORKS
cartRouter.delete('/:userID/:productID', cartController.deleteProduct, (req,res) => {
    return res.status(200).send(res.locals.deletedProduct);
});

module.exports = cartRouter;