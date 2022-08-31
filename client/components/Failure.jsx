import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from '../stylesheets/failure.scss'

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
    <img src="https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440-s1600-c85.webp"/>
    <button onClick={handleCart} type="botton" className="redirect_btn">
    Checkout Again
    </button>
    </>
  )
}

export default Failure;
