import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import style from '../stylesheets/success.scss'


const Success = () => {
  const navigate = useNavigate()

  const handleClick =() => {
    navigate('/')
  }

  return (
    <>
      <h1>Payment Successful</h1>
      <img src="http://www.quickmeme.com/img/5c/5c7dcf024101b083008e90529f42c1e32be6a97d47fc4c0c8f449466b9bc8613.jpg" alt="Borat"/>
      <button onClick={handleClick}>Click for more fun</button> 
    </>
  );
};

export default Success;