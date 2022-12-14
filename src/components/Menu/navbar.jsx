import React from "react";
import { Link } from "react-router-dom";

//Style
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link className="nav__link" to="/">
          Accueil
      </Link>
      <Link className="nav__link" to="/about">
          À Propos
      </Link>
    </nav>
  );
};

export default Navbar;