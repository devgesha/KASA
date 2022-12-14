import React from "react";
import { useState } from "react";

// style
import "./collapse.css";
import arrowUp from "../../assets/arrowup.png";
import arrowDown from "../../assets/arrowdown.png";

const Collapsible = ({title, content, width}) =>{
    const [open, setOPen] = useState(false);
    const toggle = () => {
        setOPen(!open);
    };
      
  return (
    <div className={"collapse " + ( width)}>
      <button type="button" className="collapse__title" onClick={toggle}>
        {title}
        <div className="collapse__arrow">
          { open ? <img src={arrowUp} alt=""/> : <img src={arrowDown} alt="" />}
        </div>
      </button>
        {open && (
        <div className="collapse__content">
          {Array.isArray(content) ? (
            <ul className="collapse__list">
              {content.map((equipment, index) => (
                <li key={index} className="collapse__list">
                  {equipment}
                </li>
              ))}
            </ul>
          ) : (
            <p className="collapse__text">{content}</p>
          )}
        </div>
    )}
    </div>
  );
};

export default Collapsible;
