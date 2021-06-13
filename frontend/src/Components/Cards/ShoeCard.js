import React from "react";
import "./ShoeCard.css";
import Rating from "../Rating";
const ShoeCard = ({ product }) => {
  return (
    <div className="ShoeCardContainer">
      <div className="ShoeCardImageContainer">
        <img className="ShoeCardImage" src={product.image} alt="" />
      </div>

      <div className="CardTitle">
        <h3>{product.name}</h3>
      </div>
      <Rating value={product.rating} text={`${product.numReviews} reviews` } />

      <div className="CardBody">{product.price}</div>

    </div>
  );
};

export default ShoeCard;
