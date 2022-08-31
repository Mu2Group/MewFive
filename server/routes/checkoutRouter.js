const express = require('express');
const checkoutController = require('../controllers/checkoutController');
const checkoutRouter = express.Router();


// add product to cart WORKS
checkoutRouter.post('/:userID', checkoutController.checkout, (req,res) => {
    return res.status(200).send('user checkout successful!');
});

module.exports = checkoutRouter;