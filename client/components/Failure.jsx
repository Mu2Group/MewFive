import React from 'react';
import { useNavigate } from 'react-router-dom';

const failure = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate('/productFeed')
  }

  const handleCart = (event) => {
    navigate('/confirm')
  }
  
}

return (
  <>
  <div>Sorry, your checkout failed</div>
  <button onClick={handleClick} type="button" className="redirect_btn"> 
  Keep Shopping
  </button>
  <button onClick={handleCart} type="botton" className="redirect_btn">
  Checkout Again
  </button>
  </>
)