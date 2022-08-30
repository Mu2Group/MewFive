import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {

  const handleLogin = (event) => {
    const loginObj = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    };
    axios.post(`/login`, {
      loginObj
    })
      let navigate = useNavigate();
      navigate('/productFeed')
      // .then((userID) => {
      //   console.log(userID);
      // })
      // .catch((err) => {
      //   console.log(err);
      // };
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