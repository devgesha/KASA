import React from "react";

// style
import "./rating.css";
import fullstar from "../../assets/fullStar.png";
import emptystar from "../../assets/emptyStar.png";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) =>
        rating >= star ? (
          <img key={star.toString()} className="rating__icon" src={fullstar} alt="" />
        ) : (
          <img key={star.toString()} className="rating__icon" src={emptystar} alt="" />
        )
      )}
    </div>
  );
};

export default Rating