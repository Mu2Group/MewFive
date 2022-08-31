const Inventory = require ('../models/allModels');

const productController = {};

//add product into inventory
productController.addProduct = async (req, res, next) => {
  try {
    const { productname, quantity, price, description, img } = req.body; 
    const params = [productname, quantity, price, description, img];
    console.log(params); 
    const sqlQuery = `
      INSERT INTO Inventory (productname, quantity, price, description, img)
      VALUES ($1, $2, $3, $4, $5) RETURNING *; 
    `; 
    const addedProduct = await Inventory.query(sqlQuery, params); 
    res.locals.addedProduct = addedProduct.rows; 
    return next(); 
  }
  catch {
    console.log('caught something in productController addProduct');
    return next({err: 'could not add product to inventory'});
  }
}


//Add SQL query here, should get all products with quantity > 0
//add filter for quantity > 0
productController.getAllProducts = async (req, res, next) => {
    try {
      const sqlQuery = `SELECT * FROM "inventory" LIMIT 100`;
      const allProducts = await Inventory.query(sqlQuery);
      res.locals.allProducts = allProducts.rows;
      return next();
    }
    catch {
      console.log('caught something in productController getAllProducts');
      return next('could not get product feed');
    }
  }

  productController.deleteProduct = async (req, res, next) => {
    try {
      const productID = req.params.productID;
      const sqlQuery = `DELETE FROM inventory WHERE productId = ${productID};`;
      const deletedProduct = await Inventory.query(sqlQuery);
      res.locals.deletedProduct = deletedProduct.rows;
      return next();
    }
    catch {
      console.log('caught something in productController deleteProduct');
      return next('could not delete product from inventory');
    }
  }

//Add SQL query here, should get details for the selected product
productController.getOneProduct = async (req, res, next) => {
  try {
    const productID = req.params.productID;
    const sqlQuery = `SELECT * FROM inventory WHERE productID = ${productID};`;
    const oneProduct = await Inventory.query(sqlQuery);
    res.locals.oneProduct = oneProduct.rows;
    return next();
  }
  catch {
    console.log('caught something in productController getOneProduct');
    return next('could not get product details for selected product');
  }
}


module.exports = productController;