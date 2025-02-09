import express from "express";
import mongoose from "mongoose";
import db from "./src/config/db.js";
const port = process.env.PORT || 3000;
const app = express()

import dotenv from "dotenv";
dotenv.config();


app.get('/', (req, res) => {
  res.send('Hello World!')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})