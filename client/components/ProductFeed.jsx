import React, { useState, useEffect } from 'react';



const ProductFeed = async () => {

  const [productID, setProductID] = useState(0)

  // Initialize state with single array of empty object
  const [productArr, setProductArr] = useState([
    <button id='0' onClick={() => handleClick(e)}>
      <MiniProduct 
        productName={''} 
        price={0.00} 
        inventory={0} />
    </button>
  ])

  const 

  // Make fetch request for all in stock components on component load
  // 
  useEffect(async () => {
    try {
      const res = await fetch(`/productFeed`);
      const array = await res.json(); // Returns array of product info objects

      // Clone productArr in state and write new product info to 
      const newProductArr = [...productArr]
      for (let i = 0; i < array.length; i++) {
        
        <button id='productID' onClick={handleClick(e.target.id) => setProudctID(), setModal(true) }>
          <miniProduct>
            productID: 0, 
            productName:'', 
            price: 0.00,
            inventory: 0
          </miniProduct>
        </button>

        newProductArr[i] = array[i]
      }
      setProductArr(newProductArr)
    }
    catch (err) {
      console.log('Error in ProductFeed useEffect GET request: ', err)
    }
  }, [])

  return (
    <>
    <div>
      {productArr}
    </div>
    </>

  )

}

export default ProductFeed;