import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import CartItem from './CartItem.jsx';

const CartModal = (props) => {

  const navigate = useNavigate();
  const { handleClose } = props

  // Array of cart items as <li> tags
  const [cartItems, setCartItems] = useState([])

  // Populate on load
  useEffect(() => {
    getCartItems()
  }, [])

  // Fetch request to populate modal with cart items assigned to user
  const getCartItems = async () => {
    // Request data from for user cart
    const userID = document.cookie.slice(document.cookie.indexOf('=') + 1)
    const res = await fetch(`/cart/${userID}`)
    const cartArr = await res.json()

    // Format and push data to formatted <li> elements
    const arr = [...cartItems]
    for (let i = 0; i < cartArr.length; i++) {
      arr[i] = cartArr[i]
    }
    setCartItems(arr)

  }

  // Interact with cartArr(array of objs in state)
  const handleChangeQty = (val, index) => {
    const newArr = [...cartItems]
    if (val === -1 && newArr[index].quantity <= 0) {}
    else {
      newArr[index].quantity += val
      setCartItems(newArr);
    }
  }

  const handleCheckout = () => {
    handleClose(); // Closes modal 
    navigate('/checkout'); // Navigates to /checkout page
  }
  // const handleCheckoutStripe = () => {
  //   handleClose(); // Closes modal 
  //   navigate('/stripe'); // Navigates to /checkout page
  // }

  return (
    <div>
      <ul>
        {cartItems.map((cartItem, i) => (
           <CartItem 
            index={i}
            productID={cartItem.productid}
            productName={cartItem.productname}
            quantity={cartItem.quantity}
            price={cartItem.price}
            img={cartItem.img}
            handleChangeQty={handleChangeQty}/>
        ))}
      </ul>
      <button id='checkout' onClick={handleCheckout}>Checkout</button>
      <form action="/checkout/create-checkout-session" method="POST">
      <button id='checkoutStripe'>Checkout Stripe</button>
    </form>
    </div>
  )
}

export default CartModal;