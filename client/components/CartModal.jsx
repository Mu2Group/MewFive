import React, {useState, useEffect } from 'react';

const CartModal = () => {

  // Array of cart items as <li> tags
  const [cartItems, setCartItems] = useState([])

  // Populate on load
  useEffect(async () => {
    // Request data from for user cart
    const res = await fetch('/cart')
    const cartArr = await res.json()

    // Format and push data to formatted <li> elements
    const arr = []
    cartArr.forEach(item => {
      const { productName, qty } = item
      
      const element = <li>
        <h3>{productName}</h3>
        <h2><span>QTY: </span>{qty}</h2>
        {/* <div className="button">
          <button onClick={() => handleChangeQty(1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
          </button>
          <button onClick={() => handleChangeQty(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
            </svg>
          </button>
        </div> */}
      </li>
      arr.push(element)
    })
    setCartItems(arr)
  }, [])

  return (
    <div>
      <ul>
        {cartItems}
      </ul>
      <Link to="/checkout">
        <button id='checkout'>Checkout</button>
      </Link>
    </div>
  )
}

export default CartModal;