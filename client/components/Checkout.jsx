import React from 'react';

const Checkout = () => {

  const handleConfirm = () => {
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zipCode').value;

    const creditCardNo = document.getElementById('creditCardNo').value;
    const expDate = document.getElementById('expDate').value;
    const cvCode = document.getElementById('cvCode').value;
    const CCzipCode = document.getElementById('CCzipCode').value;
    
    
  }

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
      <button id='confirm' onClick={handleConfirm}></button>
    </div>
  )
}

export default Checkout;