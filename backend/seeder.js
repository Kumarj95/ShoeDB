import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import Shoe from "./models/shoeModel.js";
import getShoesFlightClub from "./Scrapers/shoeScraper.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importShoes= async()=>{
  try{
    console.log("YOO")

    await Order.deleteMany();
    await Shoe.deleteMany();

    await User.deleteMany();

    const allUsers = await User.insertMany(users);

    const adminUser = allUsers[0]._id;
    const shoes=await getShoesFlightClub()
    // const shoes= shoeDat.data
    const sampleShoes = shoes.map((shoe) => {
      return { ...shoe, user: adminUser };
    });

    await Shoe.insertMany(sampleShoes)
    console.log("Data imported!")
    process.exit(0);
  }catch(err){
    console.log(`${err}`);
    process.exit(1);

  }
}

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();

    await User.deleteMany();

    const allUsers = await User.insertMany(users);

    const adminUser = allUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts)
    console.log("Data imported!")
    process.exit(0);
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};


const destroyData = async () => {
    try {
      await User.deleteMany();
      await Product.deleteMany();
      await Order.deleteMany();
      await Shoe.deleteMany();

  
      console.log("Data Destroyed!")
      process.exit(0);
    } catch (error) {
      console.log(`${error}`);
      process.exit(1);
    }
  };
  

  if(process.argv[2]==='-d'){
      destroyData()
  }else if(process.argv[2]=='-s'){

    importShoes()
  }else{
    importData()
  }