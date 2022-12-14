import React from "react";
import NavContainer from "../Menu/navbar"
import { Link } from "react-router-dom";

//Style
import Logo from "../../assets/LOGO.png";
import "./header.css";



function Header() {
    return (
      <div className="header">
        <Link to="/">
          <img src={Logo} alt="Logo" className="header__img" />
        </Link>
        <NavContainer />
      </div>
        
    )
}

export default Header