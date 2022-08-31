import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
  const navigate = useNavigate();
  const [priceElement, setPriceElement] = useState(0)
  const userID = document.cookie.slice(document.cookie.indexOf('=') + 1)

  const handleConfirm = async () => {
    const checkoutInfo = { 
      street : document.getElementById('street').value,
      city : document.getElementById('city').value,
      state : document.getElementById('state').value,
      zipCode : document.getElementById('zipCode').value,

      creditCardNo : document.getElementById('creditCardNo').value,
      expDate : document.getElementById('expDate').value,
      cvCode : document.getElementById('cvCode').value,
      CCzipCode : document.getElementById('CCzipCode').value,
      userID : userID
    }

    axios.post(`/checkout/${userID}`, checkoutInfo)
    .then((data) => {
      console.log('checkout response:', data)
      console.log('checkout successful!')
    })
    .catch((err) => {
      console.log('checkout unsuccessful', err)
    })
    navigate('/success');
  }
  //populate cart info on page load
  useEffect(() => {
    getCartData()
  }, [])

  const getCartData = async () => {
    try{
      const resCart = await fetch(`/cart/${userID}`)
      const cartArr = await resCart.json()
      console.log('cart array from fetch request', {cartArr})
      console.log('cart in frontend:' , cartArr)
      let totalPrice = 0
      for(let i = 0; i < cartArr.length; i++){
        totalPrice += cartArr[i].quantity * cartArr[i].price
      }
      console.log({totalPrice})
      setPriceElement(totalPrice) 
      console.log({priceElement})     
    }
    catch(err) {
      console.log('Error in checkout useEffect', err)
    }
  };
  
  return (
    <div className="checkout">
      <div className="shipping">
        <h5 id="addressTag">Address</h5>
        <input type={'text'} id="street" placeholder='Street address or P.O. Box'></input>

        <h5 id="cityTag">City</h5>
        <input type={'text'} id="city"></input>

        <h5 id="stateTag">State</h5>
        <input type={'text'} id="state"></input>

        <h5 id="zipTag">Zip Code</h5>
        <input type={'text'} id="zipCode"></input>
      </div>  
      <div className="creditCard">
        <h3 id="creditCardNo">Credit Card Information</h3>
        <input type={'text'} id="creditCardNo" placeholder='Credit Card Number'></input>
        <input type={'text'} id="expDate" placeholder='Exp. Date (MM/YY)'></input>
        <input type={'text'} id="cvCode" placeholder='CV Code'></input>
        <input type={'text'} id="CCzipCode" placeholder='Zip Code'></input>
      </div>
      <button id='confirm' onClick={handleConfirm}>Submit Payment</button>
      <div className="cart">
          ${priceElement}
      </div>
    </div>
  )
}

export default Checkout;