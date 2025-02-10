import express from "express";

const router = express.Router();

// 
 router.get("/login", (req, res) => {
  res.json({ message: "User logged in successfully" });
});
router.get("/profile", (req, res) => {
  res.json({ message: "User profile data" });
});


router.post("/register", (req, res) => {
  res.json({ message: "User registered successfully" });
});

export default router;
