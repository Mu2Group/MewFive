import React, { useState, useEffect } from 'react';

const MiniProduct = (props) => {

  const {productID, productName, price, inventory, img, setProductID, handleOpen} = props

  const handleClick = (e) => {
    console.log('productID in MiniProduct click: ', productID)
    setProductID(productID) // Sets productID in Product.jsx to fetch incoming data
    handleOpen() // Opens Modal
  }

  return (
    <>
      <button onClick={handleClick}>
        <img src={img} alt={productName}/>
        <div className="info">
          <h1 id='productName'>{productName}</h1>
          <h1 id='price'>${price}</h1>
        </div>
      </button>
    </>
  )

}

export default MiniProduct;