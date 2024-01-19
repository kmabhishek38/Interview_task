import React from 'react'
import './logIn.css'
import LogFirst from './LogFirst/LogFirst'
import LogSecond from './LogSecond/LogSecond'

function LogIn() {
  return (
    <div className='LogMain d-flex '>
      <div className='LogFt col-6'>
        <LogFirst/>
      </div>
      <div className='LogSd col-6 '>
        <LogSecond/>
      </div>
    </div>
  )
}

export default LogIn
