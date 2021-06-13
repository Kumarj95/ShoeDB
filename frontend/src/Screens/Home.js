import React from "react";
import "./Home.css";
import shoe from "../Components/1-removebg-preview.png";
import ShoeCard from "../Components/Cards/ShoeCard";
import axios from 'axios';

import { Link } from "react-router-dom";
import {useState,useEffect} from 'react'
const Home = () => {
  const[products,setProducts]= useState([]);
  useEffect(() => {
    const fetchProducts= async()=>{
      const {data}= await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts();
  }, [])

  return (
    <div>
      <div className="welcome-container">
        <div className="image-container">
          <img className="welcome-image" src={shoe} alt="" />
        </div>
        <div className="text-container">
          <h3 className="home-text">Your Favorite Shoe Is Just a Click Away</h3>
        </div>
      </div>
      <div className="home-body">
        <h1 >Newest Additions</h1>
        <div className="productRow">
          {products.map((product) => (
            <div key={product._id} className="prodcutColumn">
              <Link to={`/product/${product._id}`} style={{ color: "inherit" }}>
                <ShoeCard product={product} />
              </Link>
            </div>
          ))}
        </div>
      </div>
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
