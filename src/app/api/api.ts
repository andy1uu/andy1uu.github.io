import axios from "axios";

export default axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
    "API-Key": process.env.API_KEY,
    "origin":process.env.NODE_ENV === "production"
    ? "https://andyluu.vercel.app"
    : "http://localhost:3000"
  },
});
