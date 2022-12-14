import React from "react";
import { Link } from "react-router-dom";


import logements from "../../assets/logements.json";

import Header from "../../components/Header/header"
import Banner from "../../components/Banner/banner";
import Thumbs from "../../components/Thumbs/thumb";
import Footer from "../../components/Footer/footer";

// Style
import "../../styles/main.css";


function Home() {
    return (
        <div className= "home">
            <Header />
            <div className="home__body">
                <Banner />
                
                <section className="home__logements">
                    {logements.map((logement) => {
                        return (
                        <div className="logement" key={logement.id}>
                            <article>
                                <Link to={`/logements/${logement.id}`}>
                                    <Thumbs image={logement.cover} title={logement.title} />
                                </Link>
                            </article>
                            </div>
                        );
                    })}
                </section>
            </div>

            <Footer />
             
        </div>
    );
};

export default Home

