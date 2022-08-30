import React from 'react';
import { Routes, Route, Router} from 'react-router-dom';

import ProductFeed from './components/ProductFeed.jsx'
import Product from './components/Product.jsx'
import Checkout from './components/Checkout.jsx';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginSignup />}></Route>
        <Route path='/productFeed' element={<ProductFeed />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>

      </Routes>
    </Router>
  )
}

export default App;