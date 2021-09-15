import express from 'express'
import dotenv from'dotenv'
import connectDB from './config/db.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js'
import productRoutes from './Routes/productRoutes.js'
import shoeRoutes from './Routes/shoeRoutes.js'

dotenv.config()
const app=express()
// app.use((req,res,next)=>{
//     console.log(req.url)
//     next()
// })

connectDB()
const PORT=process.env.PORT || 5000
app.use('/api/products',productRoutes)
app.use('/api/shoes',shoeRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`))


// app.get('/', (req,res)=>{
//     res.send("API is running..")
// })

