import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// Place order
router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json({ message: "Order placed", order });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get orders
router.get("/:userId", async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId }).populate("items.productId");
  res.json(orders);
});

export default router;