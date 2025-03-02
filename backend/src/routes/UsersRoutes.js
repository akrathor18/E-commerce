import express from "express";
const router = express.Router();
import User from '../models/User.js';
import jwt from 'jsonwebtoken'
import VerifyJwtMiddleware from "../Middleware/VerifyJwtMiddleware.js";
import authMiddleware from "../Middleware/authMiddleware.js";
import mongoose from "mongoose";
function generateSessionId(user, res) {
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", 
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
  return token
}
router.post("/register", async (req, res) => {
  try {
    const userData = req.body
    console.log(userData)
    const userExist = await User.findOne({ email: userData.email })
    if (userExist) {
        return res.status(400).json('Email already registered')
    }
    const newUser = new User(userData)
    const resp = await newUser.save()
    const token = generateSessionId(newUser, res);
    res.status(201).json({ message: "User registered successfully!", token });
    
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
    const token = generateSessionId(newUser, res);
    res.status(201).json({ message: "User registered successfully!", token });
  
  } catch (error) {
    console.log(error)
    res.status(500).json('Internal server error')
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

router.post("/change-password", async (req, res) => {
  try {
    const { userId, currentPassword, newPassword } = req.body;

    // Find the user
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if current password is correct
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) return res.status(400).json({ message: "Current password is incorrect" });

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    await user.save();
    res.status(200).json({ message: "Password updated successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/profile",authMiddleware, VerifyJwtMiddleware, async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/cart",authMiddleware ,VerifyJwtMiddleware, async (req, res) => {
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
router.delete("/cartromove/:productId",authMiddleware,VerifyJwtMiddleware, async (req, res) => {
  try {
    const { productId } = req.params;
    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    // Find the user
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.cart = user.cart.filter(item => item.product.toString() !== productId);
    await user.save();

    res.status(200).json({ message: "Product removed from cart", cart: user.cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
});

router.post("/wishlist", authMiddleware, VerifyJwtMiddleware, async (req, res) => {

  try {
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid Product ID" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const productObjectId = new mongoose.Types.ObjectId(productId); 

    // Prevent duplicate wishlist entries
    if (user.wishlist.includes(productObjectId)) {
      return res.status(400).json({ message: "Product already in wishlist" });
    }

    user.wishlist.push(productObjectId); 
    await user.save();

    res.status(200).json({ message: "Product added to wishlist", wishlist: user.wishlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
});

router.delete("/wishlistromove/:productId",authMiddleware,VerifyJwtMiddleware, async (req, res) => {
  try {
    const { productId } = req.params;
    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    // Find the user
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.wishlist = user.wishlist.filter(item => item.toString() !== productId);
    await user.save();

    res.status(200).json({ message: "Product removed from wishlist", cart: user.wishlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
});

export default router;
