import express from "express";
import mongoose from "mongoose";
import db from "./src/config/db.js";
import UserRoutes from './src/routes/UsersRoutes.js'
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"; 
import cors from "cors";

import ProductsRoutes from './src/routes/ProductsRoutes.js'
import OrderRoutes from './src/routes/OrderRoutes.js'

import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

// ✅ Use cookie-parser BEFORE other middleware
app.use(cookieParser());

// ✅ Use CORS with credentials BEFORE bodyParser
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true, // Allows cookies
  })
);

app.use(bodyParser.json());

// ✅ Fix Route Import (remove unnecessary parentheses)
app.use('/api/product', ProductsRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/orders', OrderRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
