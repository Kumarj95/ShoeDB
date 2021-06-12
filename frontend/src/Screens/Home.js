import React from "react";
import "./Home.css";
import shoe from "../Components/1-removebg-preview.png";
import Card from '../Components/Cards/Card'
import products from '../products'
const Home = () => {
  return (
    <>
      <div className="welcome-container">

        <div className="image-container">
          <img src={shoe} alt="" />
        </div>
        <div className="text-container">
          <h3>Your Favorite Shoe Is Just a Click Away</h3>
        </div>

      </div>
      <div className="home-body">
      <h1>Newest Additions</h1>
      <div className="productRow">
        {
          products.map(product =>(
            <div className="prodcutColumn">

              <h3>
                {product.name}
              </h3>
              </div>
          ))
        }
      </div>

      </div>

      
      <br/>
    </>
  );
};

export default Home;
