import React, { useState } from "react";
import AdminProducts from "./AdminProducts";
import AdminOrders from "./AdminOrders";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      {/* Tabs */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setActiveTab("products")}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: activeTab === "products" ? "#4CAF50" : "#f0f0f0",
            color: activeTab === "products" ? "white" : "black",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab("orders")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeTab === "orders" ? "#4CAF50" : "#f0f0f0",
            color: activeTab === "orders" ? "white" : "black",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Orders
        </button>
      </div>

      {/* Content */}
      <div>
        {activeTab === "products" && <AdminProducts />}
        {activeTab === "orders" && <AdminOrders />}
      </div>
    </div>
  );
};

export default AdminDashboard;