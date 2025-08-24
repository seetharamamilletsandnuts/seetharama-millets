import React, { useState } from "react";
import API from "../api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;