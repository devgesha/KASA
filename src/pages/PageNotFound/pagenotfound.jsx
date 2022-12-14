import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/header";

//styles
import "./pagenotfound.css";

function NotFound() {
    return (
        <div className="error">
            <Header />
            <div className="error__body">
                <p className="error__number">404</p>
                <h1 className="error__text">Oups! La page que vous demandez n'existe pas.</h1>
            </div>
            <Link to="/" className="error__link">Retour à la page d'accueil</Link>
        </div>
    )
}
 
export default NotFound