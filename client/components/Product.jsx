import React, { useState, useEffect } from 'react';

const Product = (props) => {

  // ProductID passed through from useHistory???
  const { productID, handleClose } = props;

  //Initialize all fields in product page to be empty
  const [productName, setProductName] = useState('')
  const [inventory, setInventory] = useState(0)
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [img, setImg] = useState('https://aliiissa.files.wordpress.com/2017/10/dyyy.png')

  // Populate fields on component mount
  useEffect(() => {
    getProductData()
  }, [])

  const getProductData = async () => {
    try {
      const res = await fetch(`/productFeed/${productID}`);
      const data = await res.json();
      const { productname, quantity, price, description, img } = data[0]

      setProductName(productname);
      setInventory(quantity);
      setPrice(price);
      setDescription(description);
      setImg(img);
    }
    catch (err) {
      console.log('Error in Product useEffect GET request: ', err)
    }
  }

  // Change quantity by +1 or -1 with buttons
  const [qty, setQty] = useState(0);
  const handleChangeQty = (val) => {
    if (val === -1 && qty <= 0) {}
    else setQty(qty => qty += val)
  }

  // Add to cart with post request to backend
  const handleAddToCart = async () => {
    try {
      const userID = document.cookie.slice(document.cookie.indexOf('=') + 1)
      const res = await fetch(`/cart/${userID}/${productID}`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({quantity: qty}),
        })
      const data = await res.json()
      console.log('Successfully added to cart: ', data)
      handleClose()
    }
    catch (err) {
      console.log('Error in Product handleAddToCart POST request: ', err)
    }
  }

  return (
    <div>
      <h1 id='productName'>{productName}</h1>
      <div className="productContainer">
        <div className="productImg">
          <img src={img} alt={productName}/>
        </div>
        <div className="info">
          <h2 className="price">${price}</h2>
          <p className="description">
            {description}
          </p>
        </div>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <div className="currInventory">
        <h1><span id='green'>In stock: </span>{inventory}</h1>
      </div>
      <div className="changeQty">
        <h1>QTY: {qty}</h1>
        <div className="button">
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
        </div>
      </div>
      
    </div>

  )

}

export default Product;