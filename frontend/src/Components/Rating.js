import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import PropTypes from 'prop-types'

const Rating = ({ value, text, color}) => {
  return (
    <div className="Rating"
    >
      <span style={{color:`${color}`,margin:"0.5rem"}}>
        {value >= 1 ? (
          <BsStarFill  />
        ) : value >= 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar  />
        )}
        {value >= 2 ? (
          <BsStarFill  />
        ) : value >= 1.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar  />
        )}
        {value >= 3 ? (
          <BsStarFill  />
        ) : value >= 2.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar  />
        )}
        {value >= 4 ? (
          <BsStarFill  />
        ) : value >= 3.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar  />
        )}
        {value >= 5 ? (
          <BsStarFill  />
        ) : value >= 4.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar  />
        )}
      </span>
      <span>
          {text && text}
      </span>
    </div>
  );
};

Rating.prototype={
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,

}
Rating.defaultProps={
    color:'#f8e825'
}
export default Rating;
