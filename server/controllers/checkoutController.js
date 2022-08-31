const Carts = require('../models/allModels');
const Inventory = require('../models/allModels');

const checkoutController = {};

// WORKS
checkoutController.checkout = async (req, res, next) => {
    const userID = req.params.userID;
    // console.log({userID})
    const { quantity } = req.body;
    try {
        const sqlQuery1 = `SELECT * FROM carts WHERE userid = ${userID};`;
        const cart = await Carts.query(sqlQuery1);
        console.log('cart', cart)
        // put data into array [{productID: 1, quantity: 14}, {productID: 2, quantity: 7}]

        const sqlQuery2 = `DELETE FROM carts WHERE userId = ${userID} RETURNING *;`;
        const deletedcart = await Carts.query(sqlQuery2);
        console.log({deletedcart});
        // res.locals.deletedcart = deletedcart.rows;

        cart.rows.forEach(async (productObj)=> {
            console.log({productObj});
            const sqlQuery3 = `
              UPDATE inventory 
              SET quantity = quantity - ${productObj.quantity} 
              WHERE productID = ${productObj.productid}
              RETURNING *
            `; 
            const updatedInventory = await Inventory.query(sqlQuery3);
            console.log({updatedInventory});
        })
        res.locals.deletedcart = deletedcart.rows;
        return next();
      }
      catch {
        console.log('caught something in checkoutController checkout');
        return next('could not delete product(s) from carts');
      }
}

module.exports = checkoutController;