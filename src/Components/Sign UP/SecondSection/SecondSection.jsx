import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SecondSection.css'



function SecondSection() {
  const nav=useNavigate()
  const handle=()=>{
    nav('/login')
  }
  return (
    <div>
      <div className="Sform">
        <h1>Create Account</h1>
        <form className="mt-5 Sformcontent" >
          <div className="mb-3">
            <input type="text" className="name" placeholder="Name" />
          </div>
          <div className="mb-3">
            <input type="email" placeholder="Email" />
          </div>
          <div className="mb-5">
            <input type="password" placeholder="Password" />
          </div>
          <div className="Sbtn">
            <input type="submit" value="SIGN UP" onClick={handle}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SecondSection;
