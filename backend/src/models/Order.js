import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Products", required: true },
      title: { type: String, required: true },
      price: { type: Number, required: true },
      image: { type: String },
      quantity: { type: Number, required: true },
    },
  ],
  userName: {
    type: String,
    required: true,

  },
  userEmail: {
    type: String,
    required: true,

  },
  userAddress: {
    type: String,
    required: true,
  },
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
    default: "Pending",
  },
  createdAt: { type: Date, default: Date.now },
},
  { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

export default Order