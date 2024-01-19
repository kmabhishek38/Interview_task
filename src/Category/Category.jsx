import React from 'react'
import './Category.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Category() {
  return (
    <div className='categoryMain ms-4'>
      <h5  className='mb-3'>Categories</h5>
      <section className='ms-4'>
      <section className='mb-2'>All Categories</section>
      <section className='mb-2'>Laptops <IoIosArrowDown className='ms-5' /></section>
      <input type='checkbox' className='ms-3'/> <span>Hp</span><br/>
      <input type='checkbox' className='ms-3'/> <span>Dell</span><br/>
      <section className='mb-2 mt-2'>Tablet <IoIosArrowForward  className='ms-5'/></section>
      <section>Headphones <IoIosArrowForward /></section>
      </section>

    </div>
  )
}

export default Category
