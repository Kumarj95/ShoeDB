import express from 'express'
import dotenv from'dotenv'
import connectDB from './config/db.js'

import productRoutes from './Routes/productRoutes.js'
dotenv.config()
const app=express()


 connectDB()
const PORT=process.env.PORT || 5000
app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`))


app.use('/api/products',productRoutes)
// app.get('/', (req,res)=>{
//     res.send("API is running..")
// })

