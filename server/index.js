import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import Product from "./models/Product.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB connected");

    // 🌱 Seed only if DB is empty
    const count = await Product.countDocuments();
    if (count === 0) {
      console.log("🌱 Seeding sample products...");
      await Product.insertMany([
        {
          name: "Foxtail Millet",
          description: "Rich in fiber and protein, helps with digestion.",
          price: 120,
        },
        {
          name: "Little Millet",
          description: "Gluten-free grain, good for diabetics.",
          price: 90,
        },
        {
          name: "Barnyard Millet",
          description: "Low in calories, rich in iron and calcium.",
          price: 110,
        },
        {
          name: "Kodo Millet",
          description: "Packed with antioxidants, boosts immunity.",
          price: 100,
        },
        {
          name: "Millet Mix with Nuts",
          description: "Blend of millets and nuts for healthy snacks.",
          price: 150,
        },
      ]);
      console.log("✅ Sample products seeded");
    }

    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));