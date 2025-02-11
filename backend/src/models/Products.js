import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        id:{
            type: mongoose.Schema.Types.ObjectId,
            auto: true
        },
        title: {
            type: String,
            required: [true, "Product name is required"],
        },
        description: {
            type: String,
            required: [true, "Product description is required"],
        },
        detailedDescription:{
            type: String,
            required: [true, "Detailed description is required"],
        },
        price: {
            type: Number,
            required: [true, "Price is required"],
            min: [0, "Price cannot be negative"],
        },
        category: {
            type: String,
            required: [true, "Category is required"],
        },
        stock: {
            type: Number,
            required: [true, "Stock quantity is required"],
            min: [0, "Stock cannot be negative"],
        },
        image: {
            type: String,
            required: [true, "Product name is required"],
        },
        
        rating: 
            {
              rate: Number,
              count: Number
            },
        
    },
    { timestamps: true }
);

const Product = mongoose.model("Products", productSchema);

export default Product;
