import React from 'react';
import { useNavigate } from 'react-router-dom';

const Failure = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate('/productFeed')
  }

  const handleCart = (event) => {
    navigate('/checkout')
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
}

export default Failure;
