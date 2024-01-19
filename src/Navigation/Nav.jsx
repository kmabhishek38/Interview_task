import React from 'react'
import './Nav.css'
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";

function Nav() {
  return (
    <>
    <nav className='navbar container-fluid'>
      <div className='nav-container'>
        <input type='text' className='search-input' placeholder='Search any things'/>
        <button className='Nav-btn'>Search</button>
      </div>
      <div className='d-flex me-4'>
        <div className='iconsection d-flex'>
          <span><FiHeart className='iconss'/> </span> <div className='nav-not'><span>0</span></div><span className='nav-links'>Sign IN</span>
        </div>

        <div className='d-flex'>
          <span><MdOutlineShoppingCart className='iconss1'/> </span><div className='nav-not1'><span className='lastnot'>0</span></div><span className='nav-links'>Cart</span>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Nav
