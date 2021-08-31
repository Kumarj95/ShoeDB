import mongoose from 'mongoose'

const shoeSchema= mongoose.Schema({

       user: {
           type:mongoose.Schema.Types.ObjectId,
           required:true,
           ref: 'User'
        },

        name:{
            type:String,
            required:true,
        },
        image:{
            type:String,
            required:true,
        },
        brand:{
            type:String,
            required:true,
        },
        

    

})
