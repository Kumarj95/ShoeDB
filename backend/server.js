const express= require('express')
const products=require('./data/products')

const app=express()


app.listen(5000, console.log("Server Running On Port 5000"))

app.get('/api/products', (req,res)=>{
    res.json(products)
})



app.get('/api/products/:id', (req,res)=>{
    const product=products.find(pr=> pr._id===req.params.id)
    res.json(product)
})