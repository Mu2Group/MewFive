const express = require('express');
const cartController = require('../controllers/cartController');
const cartRouter = express.Router();

//update endpoints here
cartRouter.get('/:userID', cartController.getProducts, (req, res) => {
    return res.status(200).send(res.locals.cart);
  });


cartRouter.post('/:userID', cartController.addProduct, (req,res) => {
    return res.status(200).send(res.locals.cart);
});

cartRouter.put('/:userID', cartController.updateCart, (req,res) => {
    return res.status(200).send(res.locals.cart);
});

cartRouter.delete('/:userID/:productID', cartController.deleteProduct, (req,res) => {
    return res.status(200).send(res.locals.cart);
});

module.exports = cartRouter;