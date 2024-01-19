import React, { useState } from 'react';
import './Recommended.css';
import { IoIosArrowForward } from "react-icons/io";
import { Backdrop, Button, Fade, Modal } from '@mui/material';
import AddProduct from '../Add Product/AddProduct';

function Recommended() {
  const [isAddProductOpen, setAddProductOpen] = useState(false);

  const handleAddProductOpen = () => {
    setAddProductOpen(true);
  };

  const handleAddProductClose = () => {
    setAddProductOpen(false);
  };

  return (
    <div>
      <div className='Under-nav'>
        <span>Home </span><IoIosArrowForward />
        <button className='btn01'>Add Category</button>
        <button className='btn02'>Add Sub Category</button>
        <button onClick={handleAddProductOpen}>Add Product</button>

        <Modal
          open={isAddProductOpen}
          onClose={handleAddProductClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={isAddProductOpen}>
            <div>
              <AddProduct />
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default Recommended;
