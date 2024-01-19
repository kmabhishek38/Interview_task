import React from 'react'
import './FirstSection.css'
import { useNavigate } from "react-router-dom";

function FirstSection() {
  const nav=useNavigate()
  const handle=()=>{
    nav('/login')
  }
  return (
    <div className="SMain m-0 ">
        <div className="Stextarea col-11">
            <p className="shape1"></p>
            <p className="shape2"></p>
            <p className="shape3"></p>
            <p className="shape4"></p>
            <p className="shape5"></p>

            <div className="Scontent text-center">
                <h1>Welcome Back!</h1>
                <p className="col-11 mt-4">To keep connected with us plase login with your personal info</p>
                <button className="mt-4 Sbutton" onClick={handle}>SIGN IN</button>
            </div>
        </div>
    </div>
  )
}

export default FirstSection
