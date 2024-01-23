import React, { useState } from "react";
import "./header.css";
import logo from "./logo.png";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
const Header1 = () => {
  const[btnname,setbtnname]=useState("Login")
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact Us</li>
          <button className="login" onClick={()=>{btnname==="Login"?setbtnname("Logout"):setbtnname("Login")}}>{btnname}</button>
        </ul>
      </div>
      <div className="cart">
        <ShoppingBagOutlinedIcon sx={{ fontSize: 30 }} />
      </div>
    </div>
  );
};

export default Header1;
