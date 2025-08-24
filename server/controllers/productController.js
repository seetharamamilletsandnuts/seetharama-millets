import Product from "../models/productModel.js";

// GET /api/products
export const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

// GET /api/products/:id
export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

// POST /api/products  (Admin only)
export const createProduct = async (req, res) => {
  const product = new Product(req.body);
  const created = await product.save();
  res.status(201).json(created);
};

// PUT /api/products/:id  (Admin only)
export const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    Object.assign(product, req.body);
    const updated = await product.save();
    res.json(updated);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

// DELETE /api/products/:id  (Admin only)
export const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.deleteOne();
    res.json({ message: "Product removed" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};