import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

import Logo from "../../assets/LOGO_foot.png";

function Footer() {
    return (
        <div className= "footer">
            <div className="foot__info">
                <Link to="/">
                    <img src={Logo} alt="Logo" className="foot__img" />
                    <div className="foot__text">© 2020 Kasa. All rights reserved</div>
                </Link>
            </div>
             
        </div>
    );
};

export default Footer