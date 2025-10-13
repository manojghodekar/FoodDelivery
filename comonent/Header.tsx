import React from 'react';
import { LOGO_URL } from '../utility/constant';
export const Header = ()=>{
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
        </ul>
    </div>
   </div>)
   

    
}