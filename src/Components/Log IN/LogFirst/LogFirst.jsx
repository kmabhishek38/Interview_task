import React from 'react'
import './LogFirst.css'
import { useNavigate } from "react-router-dom";

function LogFirst() {
  const nav=useNavigate()
  const handle=()=>{
    nav('/home')
  }
  
  return (
    <div>
      <div className="Sform1">
        <h1 className='col-10 text-center'>Sign In To Your Account</h1>
        <form className="mt-5 LFormcontent">
          
          <div className="mb-3">
            <input type="email" className='email' placeholder="Email" />
          </div>
          <div className="mb-5">
            <input type="password" className='passw' placeholder="Password" />
          </div>
          <div className='forgotmain1 mb-4'>
            <u> <a className='forgot1 ' href=''>Forgot Password</a></u>
          </div>
          <div className="Sbtn1">
            <input type="submit" value="SIGN IN" onClick={handle}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogFirst
