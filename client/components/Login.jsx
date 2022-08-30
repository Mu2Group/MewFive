import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  //send login info to backend
  const handleLogin = (event) => {
    const loginObj = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    };
    console.log({loginObj})
    axios.post(`/login`, loginObj)
    .then((userID) => {
      console.log(userID);
      navigate('/productFeed')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className='login'>
        <div>Log In</div>
        <input
          id='username'
          type='text'
          placeholder='Username'
        />
        <input
          id='password'
          type='password'
          placeholder='Password'
        />
        <button onClick={handleLogin}  className='submit_btn'>
            Submit
        </button>
      </div>
    </>
  );
};

export default Login;