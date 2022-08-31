const Carts = require('../models/allModels');
const Inventory = require('../models/allModels');
const stripe = require('stripe')('sk_test_51LchXfLPt7JcszGvXsJLYRIcxYnAMgLKcgF96tCp4Bu0oBkHlrzc99l8pdir51pxzlN2chuRqn0ufusymF6eMCdW00WXZLeGik')

const DOMAIN = 'http://localhost:8080'

const checkoutController = {};

// WORKS
checkoutController.checkout = async (req, res, next) => {
    const userID = req.params.userID;
    // console.log({userID})
    try {
        const sqlQuery1 = `SELECT * FROM carts WHERE userid = ${userID};`;
        const cart = await Carts.query(sqlQuery1);
        console.log('cart in backend', cart)
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

//STRIPE ATTEMPT 3
checkoutController.payment = async (req, res, next) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1LcjaoLPt7JcszGvJ50q7nOE',
        quantity: 1,
      },
    ],
    mode: 'payment',
    // success_url: `${DOMAIN}/success`,
    success_url: `https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley`,
    cancel_url: `${DOMAIN}/canceled`,
  });

  res.redirect(303, session.url);
}

module.exports = checkoutController;