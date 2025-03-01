import express from "express";
import mongoose from "mongoose";
import db from "./src/config/db.js";
import UserRoutes from './src/routes/UsersRoutes.js'
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"; 
import cors from "cors";

import ProductsRoutes from './src/routes/ProductsRoutes.js'
import OrderRoutes from './src/routes/OrderRoutes.js'

const port = process.env.PORT || 3000;
const app = express()

import dotenv from "dotenv";
dotenv.config();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use('/api/product',(ProductsRoutes));
app.use('/api/users',(UserRoutes));
app.use('/api/orders',(OrderRoutes));

app.get('/', (req, res) => {
  res.send('Hello World!')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})