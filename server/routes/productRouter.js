const express = require('express');
const productController = require('../controllers/productController');
const productRouter = express.Router();

//get all products for feed WORKS
productRouter.get('/', productController.getAllProducts, (req, res) => {
    return res.status(200).send(res.locals.allProducts);
  });

//get individual product details WORKS
productRouter.get('/:productID', productController.getOneProduct, (req, res) => {
  return res.status(200).send(res.locals.oneProduct);
});

//add one product to inventory WORKS
productRouter.post('/addproduct', productController.addProduct, (req, res) => {
  return res.status(200).send(res.locals.addedProduct);
});

//delete one product from inventory WORKS
productRouter.delete('/:productID', productController.deleteProduct, (req, res) => {
  return res.status(200).send(res.locals.deletedProduct);
});

module.exports = productRouter;