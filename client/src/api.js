import axios from "axios";

// Replace with your Render backend URL
const API = axios.create({ baseURL: "https://seetharama-millets.onrender.com/api" });

export default API;