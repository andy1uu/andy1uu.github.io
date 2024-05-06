import axios from "axios";

export default axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
    "API-Key": process.env.API_KEY,
  },
});
