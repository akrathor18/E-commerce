import express from 'express'
import Order from '../models/Order.js'
import Products from '../models/Products.js';
import User from '../models/User.js'
import authMiddleware from "../Middleware/authMiddleware.js"
import VerifyJwtMiddleware from '../Middleware/VerifyJwtMiddleware.js'
const router = express.Router()

router.post('/addOrder', authMiddleware,VerifyJwtMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;
        const { products, totalAmount } = req.body;
    
        // Fetch full product details from DB
        const productDetails = await Promise.all(
            products.map(async (item) => {
            const product = await Products.findById(item.product);
            if (!product) throw new Error("Product not found");
    
            return {
              productId: product._id,
              title: product.title,
              price: product.price,
              image: product.image || "", 
              quantity: item.quantity,
            };
          })
        );
    
        const newOrder = new Order({
          user: userId,
          products: productDetails,
          totalAmount,
        });
    
        const savedOrder = await newOrder.save();
    
        // Add order to user document
        await User.findByIdAndUpdate(userId, { $push: { orders: savedOrder._id } });
    
        res.status(201).json({ message: "Order placed successfully!", order: savedOrder });
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Failed to place order", details: error.message });
      }
 
})

export default router