import express from 'express'
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js'

const router= express.Router();
//@desc fetch all products
// @route GET api/products
// @access Public Route
router.get('/', asyncHandler(async (req,res)=>{
    const Products= await Product.find({});
    res.json(Products)
}))


// @desc fetch one product
// @route GET api/products/:id
// @access Public Route
router.get('/:id', asyncHandler(async (req,res)=>{
    const product= await  Product.findById(req.params.id)

    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product Not Found')
    }
}))
export default router;