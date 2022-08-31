import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';

import HomePage from './components/HomePage.jsx';
import ProductFeed from './components/ProductFeed.jsx'
// import Product from './components/Product.jsx'
import Checkout from './components/Checkout.jsx';

import Success from './components/Success.jsx';
import Failure from './components/Failure.jsx';

const App = () => {

  return (
    <>
    <h1>Hello e-commerce</h1>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/productFeed' element={<ProductFeed />}/>
        <Route path='/checkout' element={<Checkout />}></Route>
        {/* <Route path='/productFeed' element={<ProductFeed />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route> */}
        <Route path='/success' element={<Success />}></Route>
        <Route path='/canceled' element={<Failure />}></Route>


      </Routes>
    </>
  )
}

export default App;