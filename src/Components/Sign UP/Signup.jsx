import React from 'react'
import './Signup.css'
import FirstSection from './FirstSection/FirstSection'
import SecondSection from './SecondSection/SecondSection'

function Signup() {
  return (
    <div className='continer-fluid d-flex'>
        <div className='First'>
            <FirstSection/>
        </div>
        <div className='Second '>
            <SecondSection/>
        </div>
    </div>
  )
}

export default Signup
