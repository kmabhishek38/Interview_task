import React, { useState } from 'react';
import './AddProduct.css';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import InputText from '../Components/InputType/TypeText'

function AddProduct() {
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (value) => {
    const newValue = quantity + value;
    if (newValue >= 0) {
      setQuantity(newValue);
    }

  };
 

  const handleSubmit = (e) => {
    e.preventDefault(); 
  };

  return (
    <div>
      <form className="animate" onSubmit={handleSubmit}>
        <h3 className='text-center'>Add Product</h3>
        <div>
          <label className='add-heads opacity-50'>Title :</label>
          <InputText p='Enter Product Name' />
          <InputText p='helllooooo' className='ff' small/>
        </div>
        <div>
          <div className="d-flex">
            <label className='add-heads'>Variants :</label>
            <div className="Input-area d-flex">
              <div>
                <label>Ram :</label>
                <input type="text" className="add-ram" />
              </div>
              <div>
                <label>Price :</label>
                <input type="text" className="add-ram" value="$" />
              </div>
              <div>
                <label>QTY :</label>
                <button onClick={() => updateQuantity(-1)}><MdOutlineKeyboardArrowLeft /></button>
                <input type="number" value={quantity} min="1" onChange={(e) => setQuantity(e.target.value)} />
                <button onClick={() => updateQuantity(1)}><MdOutlineKeyboardArrowRight /></button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
