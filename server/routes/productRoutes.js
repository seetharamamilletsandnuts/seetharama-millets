// server/routes/productRoutes.js
import express from "express";
import Product from "../models/Product.js"; // adjust path if needed
import { isAdmin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// @desc    Get all products
// @route   GET /api/products
// @access  Public
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

// @desc    Create a new product
// @route   POST /api/products
// @access  Admin
router.post("/", protect, isAdmin, async (req, res) => {
  try {
    const product = new Product(req.body);
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: "Product creation failed" });
  }
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Admin
router.put("/:id", protect, isAdmin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      Object.assign(product, req.body);
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Product update failed" });
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Admin
router.delete("/:id", protect, isAdmin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.deleteOne();
      res.json({ message: "Product removed" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product" });
  }
});

export default router;