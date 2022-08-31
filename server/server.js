const path = require('path');
const express = require('express');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cartRouter = require('./routes/cartRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const checkoutRouter = require('./routes/checkoutRouter');

app.use('/cart', cartRouter)
app.use('/productfeed', productRouter);
app.use('/checkout', checkoutRouter);
app.use('/', userRouter);

if (process.env.NODE_ENV === 'production') {
  console.log('running production mode');
  app.use('/build', express.static(path.resolve(__dirname, '../build')));

  app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../index.html')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

const server = app.listen(PORT, () => console.log(`listening on port ${PORT}`));

module.exports = server;
