import React, { useState } from "react";
import API from "../api";

function Admin() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = async () => {
    await API.post("/admin/products", { name, description: desc, price });
    alert("Product added");
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} /><br />
      <input placeholder="Description" onChange={(e) => setDesc(e.target.value)} /><br />
      <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} /><br />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default Admin;