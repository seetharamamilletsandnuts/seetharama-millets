import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number
    }
  ],
  totalAmount: Number,
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);