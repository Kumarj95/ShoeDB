import React from "react";
import "./Home.css";
import shoe from "../Components/1-removebg-preview.png";
import ShoeCard from "../Components/Cards/ShoeCard";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => {
    return state.productList;
  });
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div className="loaderContainer">
        <Loader/>  
        </div>
      ) : error ? (
        <Message color={"#FFBABA"} text={error} font={"#D8000C"}> </Message>
      ) : (

        <>
          <div className="welcome-container">
            <div className="image-container">
              <img className="welcome-image" src={shoe} alt="" />
            </div>
            <div className="text-container">
              <h3 className="home-text">
                Your Favorite Shoe Is Just a Click Away
              </h3>
            </div>
          </div>
          <div className="home-body">
            <h1>Newest Additions</h1>
            <div className="productRow">
              {products.map((product) => (
                <div key={product._id} className="prodcutColumn">
                  <Link
                    to={`/shoe/${product._id}`}
                    style={{ color: "inherit" }}
                  >
                    <ShoeCard product={product} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* <div className="home-body">
      <h1>Newest Additions</h1>
      <div className="productRow">
        {
          products.map(product =>(
            <div className="prodcutColumn">
              <Link to={`/product/${product._id}`}
              style={{color:"inherit"}}>
                <ShoeCard
                key={product._id}
                product={product}
                />
              </Link>
              </div>

              
          ))
        }
      </div>
      

      </div> */}
    </div>
  );
};

export default Home;
