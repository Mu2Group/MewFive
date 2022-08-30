const Inventory = require ('../models/allModels');

const productController = {};

//Add SQL query here, should get all products with quantity > 0
productController.getAllProducts = async (req, res, next) => {
    try {
      const user_id = req.body.user_id;
      const sqlQuery = ``;
      const allProducts = await db.query(sqlQuery);
      res.locals.allProducts = allProducts.rows;
      return next();
    }
    catch {
      console.log('caught something in productController getAllProducts');
      return next('could not get product feed');
    }
  }

//Add SQL query here, should get details for the selected product
productController.getOneProduct = async (req, res, next) => {
  try {
    const user_id = req.body.user_id;
    const sqlQuery = ``;
    const oneProducts = await db.query(sqlQuery);
    res.locals.oneProduct = oneProduct.rows;
    return next();
  }
  catch {
    console.log('caught something in productController getOneProduct');
    return next('could not get product details for selected product');
  }
}


module.exports = productController;