import express from 'express'
import asyncHandler from 'express-async-handler';
import Shoe from '../models/shoeModel.js'

const router= express.Router();
//@desc fetch all products
// @route GET api/products
// @access Public Route
router.get('/', asyncHandler(async (req,res)=>{
    const Shoes= await Shoe.find({});
    res.cookie('cookie2', 'value2', { sameSite: 'none', secure: true })
    res.json(Shoes)
}))


// @desc fetch one product
// @route GET api/products/:id
// @access Public Route
router.get('/:id', asyncHandler(async (req,res)=>{

    const shoe= await  Shoe.findById(req.params.id)

    if(shoe){
        res.json(shoe)
    }else{
        res.status(404)
        throw new Error('Shoe Not Found')
    }
}))

router.get('/r/randomShoes', asyncHandler(async (req,res)=>{
    const shoes=[]
    for(var i=0; i<8; i++){
        const shoe = await Shoe.aggregate([{ $sample: { size: 1 } }])
        shoes.push(shoe[0])
    }
    res.json(shoes)
}))
export default router;