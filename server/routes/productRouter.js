const express = require('express');
const productController = require('../controllers/productController');
const productRouter = express.Router();

//get all products for feed
productRouter.get('/', productController.getAllProducts, (req, res) => {
    return res.status(200).send(res.locals.allProducts);
  });


//get individual product
productRouter.get('/:productID', productController.getOneProduct, (req, res) => {
  return res.status(200).send(res.locals.oneProduct);
});

module.exports = productRouter;