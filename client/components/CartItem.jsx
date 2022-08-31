import React, { useState, useEffect } from 'react';
import axios from 'axios';

import style from '../stylesheets/cartItem.scss'

const CartItem = (props) => {

  const {index, productID, productName, quantity, price, img, handleChangeQty} = props

  // const [isThrottled, setThrottled] = useState(false)

  useEffect(() => {
    // console.log('throttled?', isThrottled)
    // if (isThrottled) {}
    // else {
      const userID = document.cookie.slice(document.cookie.indexOf('=') + 1)
      axios.put(`/cart/${userID}/${productID}`, { quantity : quantity })
        .then(res => {
          // setThrottled(val => {
          //   val = true
          //   return val
          // })
          // setTimeout(()=> {
          //   setThrottled(val => {
          //     val = false
          //     return val
          //   })
          // }, 3000)
        })
        .catch(err => console.log('Error in updating cart at line item: ', productName, err))
    // }
    
  }, [quantity])

  return (
    <>
      <li>
        <img src={img} alt={productName}/>
        <h3>{productName}</h3>
        <h2><span>QTY: </span>{quantity}</h2>
        <h2><span>$</span>{price}</h2>
        <h2><span>Subtotal: $</span>{ +(price*quantity).toFixed(2) }</h2>
        <div className="button">
          <button onClick={() => handleChangeQty(1, index)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
          </button>
          <button onClick={() => handleChangeQty(-1, index)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
            </svg>
          </button>
        </div>
      </li>
    </>
  )

}

export default CartItem;