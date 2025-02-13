import express from "express";
const router = express.Router();
import User from '../models/User.js';
import jwt from 'jsonwebtoken'
import VerifyJwtMiddleware from "../Middleware/VerifyJwtMiddleware.js";
function generateSessionId(user, res) {
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "7d", // Token expires in 7 days
  });
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
  console.log(token)
}
router.post("/register", async (req, res) => {
  try {
    const userData = req.body
    const userExist = await User.findOne({ email: userData.email })
    if (userExist) {
        return res.status(400).json('Email already registered')
    }
    const newUser = new User(userData)
    const resp = await newUser.save()
    generateSessionId(newUser, res);
    res.status(201).json('User resgister successfully!')
    console.log(resp)
} catch (error) {
    console.log(error)
    res.status(500).json(`Internal server error`)
}
});
 router.post("/login", async (req, res) => {
  try {
    const {email, password} = req.body;
    const userLogin = await User.findOne({ email });

    if (!userLogin) return res.status(404).json('User not found');
    const isMatch = await userLogin.comparePassword(password);
    if (!isMatch) return res.status(400).json('Invalid credentials');
    generateSessionId(userLogin, res);
    res.json({ message: 'User logged in successfully' });

  } catch (error) {
    console.log(error)
    res.status(500).json('Internal server error')
  }
});
router.get("/profile", VerifyJwtMiddleware, async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.status(200).json({ message: "Logged out successfully!" });
});


router.post("/cart", VerifyJwtMiddleware, async (req, res) => {
  try {
    const { productId } = req.body; 

    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.cart.push({ product: productId }); 
    await user.save();

    res.status(200).json({ message: "Product added to cart", cart: user.cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
});

router.delete("/cart/:productId", VerifyJwtMiddleware, async (req, res) => {
  try {
    const { productId } = req.params; // ✅ Get productId from URL params

    // Check if productId is provided
    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    // Find the user
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Remove the product from the cart using MongoDB's $pull operator
    user.cart = user.cart.filter(item => item.product.toString() !== productId);
    await user.save();

    res.status(200).json({ message: "Product removed from cart", cart: user.cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
});






export default router;
