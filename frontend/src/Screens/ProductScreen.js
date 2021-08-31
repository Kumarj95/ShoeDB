import React from 'react'
import './ProductScreen.css'
import { Link } from 'react-router-dom'
import Rating from '../Components/Rating'
import axios from 'axios'
import {useState ,useEffect} from 'react'
const ProductScreen = ({match}) => {
    const [product,setProduct]= useState({})
    useEffect(() => {
        const fetchProduct= async()=>{
          const {data}= await axios.get(`/api/products/${match.params.id}`)
          setProduct(data)
        }
        fetchProduct();
      }, [match])
    
    

    return (
        <div className="ProductScreenContainer">
        <Link to='/'>
            <button className="BackBtn"> 
            <h3>
                Go Back
                </h3>
            </button>
        </Link>
        <div className="Row">
            <div className="Col n1">
                <div className="ProductImageContainer">
                <img src={product.image} alt={product.name}/>
                </div>
            </div>
            <div className="Col n2">
                <div className="ProductNameContainer">
                    <h1> {product.name}</h1>
                </div>
                <div className="seperator"></div>
                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                {console.log(product.countInStock)}
                <div className="seperator"></div>
                <div className="ProductPrice">
                    ${product.price}
                </div>
                <div className="seperator"></div>
                <div className="ProductDescription">
                    {product.description}
                </div>
            </div>
            <div className="Col n3">
                <h4>Price:${product.price} </h4>
                <div className="seperator small"></div>

                <div className="availablity">Availablility:{product.countInStock>0?` Available`:   ` Not Available` }</div>
                <div className="seperator small"></div>

            </div>

            </div>

        </div>
    )
}

export default ProductScreen
