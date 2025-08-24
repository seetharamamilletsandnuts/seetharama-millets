import React from "react";

function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100px", borderRadius: "4px" }}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
    </div>
  );
}

export default ProductCard;