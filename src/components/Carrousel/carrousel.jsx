import React from "react";
import { useState } from "react";

// style
import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";
//import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import "./carrousel.css";

const Carrousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;


    const nextSlide = () => {
      setCurrent(current === length -1 ? 0 : current +1);
    };
    const prevSlide = () => {
      console.log(current)
      setCurrent(current === 0 ? length -1 : current -1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }

    return (
      <section className="slider">
          <span className="counter__output">{current+1} / {length}</span>
          <img src={arrowLeft} alt="" className="previous-icon" onClick={prevSlide} />
        
        
          <img src={arrowRight} alt="" className="next-icon" onClick={nextSlide} />
        
        {slides.map((picture, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (<img src={picture} alt="logement photos" className="image" />)}
            </div>
          );
        })}
      </section>
    );
};
  
export default Carrousel