import React from 'react'
import './LogSecond.css'
import { useNavigate } from "react-router-dom";

function LogSecond() {
  const nav=useNavigate()
  const handle=()=>{
    nav('/')
  }
  return (
    <div className="SMain1 m-0 ">
        <div className="Stextarea1 col-11">
            <p className="shape01"></p>
            <p className="shape02"></p>
            <p className="shape03"></p>
            <p className="shape04"></p>
            <p className="shape05"></p>
            <p className="shape06"></p>
            <p className="shape07"></p>
            <p className="shape08"></p>

            <div className="Scontent1 text-center">
                <h1>Hello Friend!</h1>
                <p className="col-11 mt-4">Enter your personal details and start your journey with us</p>
                <button className="mt-4 Sbutton1" onClick={handle}>SIGN UP</button>
            </div>
        </div>
    </div>
  )
}

export default LogSecond
