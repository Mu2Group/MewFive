import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';

import NavBar from './NavBar.jsx';
import MiniProduct from './MiniProduct.jsx';
import Product from './Product.jsx';

import styles from '../stylesheets/productFeed.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '80%',
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
  useEffect(()=>{
    if (productArr.length){
      getFeed();  
    }
  }, [])
  // Make fetch request for all in stock components on component load
  const getFeed = async () => {
    const res = await fetch(`/productFeed`);
    const array = await res.json(); // Returns array of product info objects

    // Clone productArr in state and write new product info to 
    const newProductArr = [...productArr];
    for (let i = 0; i < array.length; i++) {
      console.log('each array is: ', array[i])
      const {productid, productname, price, quantity, img} = array[i]
      const element = <MiniProduct 
                        productID={productid}
                        productName={productname} 
                        price={price} 
                        img={img}
                        inventory={quantity} 
                        setProductID={setProductID}
                        handleOpen={handleOpen}/>
      newProductArr[i] = element;
      console.log('newProductArr: ', newProductArr)
    }
    console.log('newProductArr after writing: ', newProductArr)
    setProductArr(newProductArr)
  }
  

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
            <Product productID={productID} handleClose={handleClose}/>
          </Box>
        </Fade>
      </Modal>
      <NavBar />
      <div id='productArr'>{productArr}</div>
    </>
  )
}

export default ProductFeed;      

