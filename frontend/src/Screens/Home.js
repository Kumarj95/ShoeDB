import React from "react";
import "./Home.css";
import shoe from "../Components/1-removebg-preview.png";
import ShoeCard from '../Components/Cards/ShoeCard'
import products from '../products'
import Rating from '../Components/Rating'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className="welcome-container">

        <div className="image-container">
          <img className="welcome-image" src={shoe} alt="" />
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
              <Link to={`/products/${product._id}`}
              style={{color:"inherit"}}>
                <ShoeCard
                product={product}
                />
              </Link>
              </div>

              
          ))
        }
      </div>
      

      </div>
      <div className="home-body">
      <h1>Newest Additions</h1>
      <div className="productRow">
        {
          products.map(product =>(
            <div className="prodcutColumn">
              <Link to={`/products/${product._id}`}
              style={{color:"inherit"}}>
                <ShoeCard
                product={product}
                />
              </Link>
              </div>

              
          ))
        }
      </div>
      

      </div>

      
    </div>
  );
};

export default Home;
