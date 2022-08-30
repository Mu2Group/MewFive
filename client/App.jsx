import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';

import HomePage from './components/HomePage.jsx';
import ProductFeed from './components/ProductFeed.jsx'
// import Product from './components/Product.jsx'
// import Checkout from './components/Checkout.jsx';

const App = () => {

  return (
    <>
    <h1>Hello e-commerce</h1>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/productFeed' element={<ProductFeed />}/>
        {/* <Route path='/productFeed' element={<ProductFeed />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route> */}
      </Routes>
    </>
  )
}

export default App;