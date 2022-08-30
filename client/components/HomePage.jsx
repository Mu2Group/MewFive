import axios from 'axios';
import React, { useState } from 'react';

import Login from './Login.jsx';
import Signup from './Signup.jsx';

const HomePage = () => {

  // Render Signup component on true
  // Render Login component on false => initial state
  const [isSignup, setSignup] = useState(false)
  const [buttonText, setButtonText] = useState('Click to Signup')

  // Toggle between signup and login components
  const handleToggle = () => {
    if (isSignup) {
      setButtonText('Click to Login')
      setSignup(false)
    } 
    else {
      setButtonText('Click to Signup') 
      setSignup(true)
    }
  }

  return (
    <>
      {/* Conditional render for login/signup */}
      <div id='loginSignup'>
        { isSignup ? <Signup/> : <Login/> }
      </div>
      {/* Button for toggling isSignup */}
      <button id='toggleSignup' onClick={handleToggle}>
        {buttonText}
      </button> 
    </>
  );
};

export default HomePage;