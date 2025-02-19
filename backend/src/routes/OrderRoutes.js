import express from 'express'
import mongoose from "mongoose";
import Order from '../models/Order.js'
import Products from '../models/Products.js';
import User from '../models/User.js'
import authMiddleware from "../Middleware/authMiddleware.js"
import VerifyJwtMiddleware from '../Middleware/VerifyJwtMiddleware.js'
const router = express.Router()

router.post('/addOrder', authMiddleware, VerifyJwtMiddleware, async (req, res) => {
  try {
    const { _id, name, email, address, } = req.user;
    const { products, totalAmount } = req.body;
    const userId = req.user.id;
    console.log("User details:", { _id, name, email, address });
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
    if (!_id) {
      return res.status(400).json({ error: "User ID is missing" });
    }
    const newOrder = new Order({
      user: {
        _id,  
        name,
        email,
        address,
      },

      products: productDetails, 
      totalAmount,
    });
    console.log("newOrder",newOrder)

    const savedOrder = await newOrder.save();
    await User.findByIdAndUpdate(userId, { $push: { orders: savedOrder } });

    res.status(201).json({ message: "Order placed successfully!", order: savedOrder });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to place order", details: error.message });
  }

})

router.get('/getOrders', authMiddleware, VerifyJwtMiddleware, async (req, res) => {

  try {
    const ordersPlaced = await Order.find();
    res.json(ordersPlaced);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to Ftech Orders", details: error.message })
  }
})

router.put('/updateStatus:id', authMiddleware, VerifyJwtMiddleware, async (req, res)=>{
  try {
    const id= req.params.id;
    const { status } = req.body;  
    const order = await Order.findById(req.params.id);

    if(!order){
      res.status(404).json({massage:'Order not found!'})
    }
    const validStatuses = ["Pending", "Shipped", "Delivered", "Cancelled"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    order.status = status;
    await order.save();

    res.status(200).json({ message: "Order status updated", order });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to update order status", details: error.message })
  }
})

export default router