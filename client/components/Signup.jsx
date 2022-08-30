import axios from 'axios';
import React, { useState } from 'react';

const Signup = () => {

  
  const handleSignup = (event) =>{
    const signUp = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      street: document.getElementById('street').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      zipCode: document.getElementById('zipCode').value
    }
      // axios.post(`/signup`, {
      //   signUp
      // })
      //   .then((userID) => {
      //     console.log(userID)
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
  };

  return (
    <>
    <div className='sign-up'>
        <div>Sign Up</div>
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
           <input
            id='firstName'
            type='text'
            placeholder='First Name'
          />
           <input
            id='lastName'
            type='text'
            placeholder='Last Name'
          />
          <input
            id='email'
            type='text'
            placeholder='email'
          />
          <input
            id='street'
            type='text'
            placeholder='street address'
          />
          <input
            id='city'
            type='text'
            placeholder='City'
          />
          <input
            id='state'
            type='text'
            placeholder='State'
          />
          <input
            id='zipCode'
            type='text'
            placeholder='Zipcode'
          />
          <button onClick={handleSignup} type='submit' className='submit_btn'>
              Submit
          </button>
      </div>
    </>
  );
};

export default Signup;