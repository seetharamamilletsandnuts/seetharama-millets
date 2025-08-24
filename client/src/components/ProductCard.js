import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <img src={product.image} alt={product.name} style={{ width: "100px" }} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;