import express from "express";
const router = express.Router();
import User from '../models/User.js';
import jwt from 'jsonwebtoken'

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
router.get("/profile", (req, res) => {
  res.json({ message: "User profile data" });
});




export default router;
