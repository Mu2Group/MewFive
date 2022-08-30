const setUserSSIDCookie = require ('../models/allModels');
const bcrypt = require('bcrypt');

const userController = {};

userController.createUser = async (req, res, next) => {
    try{
    const { username, password, firstName, lastName, email, street, city, state, zipCode} = req.body;

    //hash pw
    const hashedPW = await bcrypt.hash(password, 10);

    /* for sqlQuery involving insert need to insert through $params not string literals */
    const params = [ username, hashedPW, firstName, lastName, email, street, city, state, zipCode ];
    const sqlQuery = `
      INSERT INTO users (username, hashedPW, firstName, lastName, email, street, city, state, zipCode) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;`;
    
    const createdUser = await Users.query(sqlQuery, params);

    console.log(createdUser.rows[0]._id);
    res.locals.user_id = createdUser.rows[0]._id;
    console.log('about to go to cookie middleware with', res.locals.user_id);
    next();

    }
    catch (err) {
    next ({
        log: 'Error at middleware userController',
        status: 501,
        message: {
            err: `Error has occured while signing up.`,
        },
    })
    }
}

userController.verifyUser = async (req, res, next) => {
    try{
    const { username, password } = req.body;

    //checking if both fields are filled in

    if (username === undefined || password === undefined) {
        // redirect to sign up page
    }

    console.log(username, password);
    const sqlQuery = `SELECT * FROM users WHERE username='${username}';`
    const verifiedUser = await Users.query(sqlQuery);

    if (verifiedUser.rows.length === 0) {
        console.log('Wrong username/password');  
        res.redirect(400, '/');
    }
    else {
        const verifyPW = await bcrypt.compare(password, verifiedUser.rows[0].password)
        if (verifyPW) {
        res.locals.user_id = verifiedUser.rows[0]._id;
        next();
        }// TO DO else redirect to sign up page
        else {
        console.log('Wrong username/password');
        res.redirect(400, '/');
        } 
    };
}
    catch (err) {
        next('global error handler')
    }
}

module.exports = userController;