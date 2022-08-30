const express = require('express');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const userRouter = express.Router();


userRouter.post('/signup', 
    userController.createUser, 
    cookieController.setUserSSIDCookie, (req, res) => {
    return res.status(200).send('user signed up!');
  });


userRouter.post('/login', 
    userController.verifyUser, 
    cookieController.setUserSSIDCookie, (req,res) => {
    return res.status(200).send(res.locals.user);
});
    
userRouter.get('/*', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});  

module.exports = userRouter;