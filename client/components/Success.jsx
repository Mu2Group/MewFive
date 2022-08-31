import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate()

  const handleClick =() => {
    navigate('/')
  }

  return (
    <>
      <h1>Payment Successful</h1>
      <button onClick={handleClick}>Click for more fun</button> 
    </>
  );
};

export default Success;