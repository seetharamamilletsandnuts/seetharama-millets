import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // Later, replace this with your real auth state from context/redux/localStorage
  const user = JSON.parse(localStorage.getItem("userInfo")); 
  const isAdmin = user?.isAdmin;  // backend should return isAdmin in token/user object

  return (
    <nav style={{ padding: "10px", background: "#f5f5f5" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/checkout" style={{ marginRight: "10px" }}>Checkout</Link>
      {!user ? (
        <Link to="/login">Login</Link>
      ) : (
        <>
          <span style={{ marginRight: "10px" }}>Welcome {user.name}</span>
          {isAdmin && (
            <Link to="/admin" style={{ marginRight: "10px" }}>Admin</Link>
          )}
        </>
      )}
    </nav>
  );
}

export default Navbar;
