import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// Add product
router.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json({ message: "Product added", product });
});

// Delete product
router.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

export default router;