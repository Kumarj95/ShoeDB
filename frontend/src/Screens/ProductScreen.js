import React from "react";
import "./ProductScreen.css";
import { Link } from "react-router-dom";
import Rating from "../Components/Rating";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
const ProductScreen = ({ match }) => {
  const productDetails = useSelector((state) => {
    return state.productDetails;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);
  const { loading, error, product } = productDetails;
  console.log(productDetails)
  return (
    <div className="ProductScreenContainer">
      <Link to="/">
        <button className="BackBtn">
          <h3>Go Back</h3>
        </button>
      </Link>
      {loading ? (
        <div className="loaderContainer"> 
        <Loader />
        </div>
      ) : error ? (
        <Message color={"#FFBABA"} text={error} font={"#D8000C"} />
      ) : (
        <>
              <div className="Row">
        <div className="descriptions">
          <div className="Col n1">
            <div className="ProductImageContainer">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
          <div className="Col n2">
            <div className="ProductNameContainer">
              <h1> {product.name}</h1>
            </div>
            <div className="seperator"></div>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
            {console.log(product.countInStock)}
            <div className="seperator"></div>
            <div className="ProductPrice">${product.price}</div>
            <div className="seperator"></div>
            <div className="ProductDescription">{product.description}</div>
          </div>
        </div>

        <div className="Col n3">
          <div className="seperator small col3"></div>

          <h4>Price:${product.price} </h4>
          <div className="seperator small col3"></div>

          <div className="availablity">
            Availablility:
            {product.countInStock > 0 ? ` Available` : ` Not Available`}
          </div>
          <div className="seperator small col3"></div>
          <button className="addToCart"> Add to Cart</button>
          <div className="seperator small col3"></div>
        </div>
      </div>

        </>
      )}
    </div>
  );
};

export default ProductScreen;
