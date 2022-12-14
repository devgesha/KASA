import React from "react";
import "./thumb.css";

const Thumbs = ({ image, title }) => {
  return (
    <div className="thumb">
      <img src={image} alt="" className="thumb__img" />
      <div className="thumb__overlay"></div>
      <h2 className="thumb__title">{title}</h2>
    </div>
  );
};

export default Thumbs;