import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';

import MiniProduct from './MiniProduct.jsx';
import Product from './Product.jsx';

const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '30%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ProductFeed = () => {

  // Current productID Modal request
  const [productID, setProductID] = useState(0)

  // Modal open state
  const [open, setOpen] = useState(false);

  // Initialize state with single array of empty object
  const [productArr, setProductArr] = useState([
    <MiniProduct 
      productID={0}
      productName={''} 
      price={0.00} 
      inventory={0}
      img={'https://aliiissa.files.wordpress.com/2017/10/dyyy.png'} 
      setProductID={setProductID}/>
  ])

  // console.log('productArr from useState: ', productArr)

  // Make fetch request for all in stock components on component load
  useEffect(async () => {
    try {
      // const res = await fetch(`/productFeed`);
      // const array = await res.json(); // Returns array of product info objects

      //****DUMMY DATA */
      const array = [
        {
          productID: 0,
          productName: 'Premier Protein', 
          price: 49.99, 
          img: 'https://i.ebayimg.com/images/g/CQwAAOSwjxZgaJU4/s-l500.jpg',
          inventory: 99, 
        },
        {
          productID: 1,
          productName: 'glue', 
          price: 24.99, 
          img: 'https://m.media-amazon.com/images/I/51bu4W7E3TL._AC_SX679_.jpg',
          inventory: 99, 
        }
      ]
      //********END OF DUMMY DATA */

      // Clone productArr in state and write new product info to 
      const newProductArr = [...productArr];
      for (let i = 0; i < array.length; i++) {
        const {productID, productName, price, inventory, img} = array[i]
        const element = <MiniProduct 
                          productID={productID}
                          productName={productName} 
                          price={price} 
                          img={img}
                          inventory={inventory} 
                          setProductID={setProductID}
                          handleOpen={handleOpen}/>
        newProductArr[i] = element;
      }
      console.log('newProductArr after writing: ', newProductArr)
      setProductArr(newProductArr)
    }
    catch (err) {
      console.log('Error in ProductFeed useEffect GET request: ', err)
    }
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log('handleClose clicked')
    setOpen(false);
  }

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Product productID={productID}/>
          </Box>
        </Fade>
      </Modal>
      <div>{productArr}</div>
    </>
  )
}

export default ProductFeed;      

