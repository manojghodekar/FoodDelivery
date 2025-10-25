import React from 'react';
import { LOGO_URL } from '../utility/constant';
import {useState, useEffect} from 'react';

export const Header = ()=>{


  const [buttonName, setButtonName]= useState("Login")
  const click = ()=>{
    buttonName==="Login"?
    setButtonName("LogOut"): setButtonName("Login")
  }
  return(<div className="header">
    <div className="logo">
           <img src={LOGO_URL}></img>
    </div>
    <div className="nav-item">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button  onClick={click}>{buttonName}</button>
        </ul>
    </div>
   </div>)
   

    
}