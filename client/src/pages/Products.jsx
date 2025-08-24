import React, { useEffect, useState } from "react";
import API from "../api";
import ProductCard from "../components/ProductCard.jsx";

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    API.get("/products").then((res) => setProducts(res.data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert("Added to cart!");
  };

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((p) => (
          <ProductCard key={p._id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Products;