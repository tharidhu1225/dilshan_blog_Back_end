import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  productId : {
        type : String,
        required : true,
        unique : true 
    },
    dateTime : {
        type : String,
        required : true
    },
    postName : {
        type :String,
        required : true
    },
    
    Images : [
        {
            type : String
        }
    ],
  
    description : {
        type : String,
        required : true
    }
})

const Product = mongoose.model("products",productSchema);

export default Product;