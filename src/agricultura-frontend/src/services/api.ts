import axios from "axios";
import { url } from "./index";

console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL);

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    //"Accept-Encoding": "gzip",
    "Content-Encoding": "gzip",
   // Authorization: "Bearer " + sessionStorage.getItem("token"),
    "Access-Control-Allow-Origin": "*",
  },
});

// // Add a request interceptor
// API.interceptors.request.use(
//   (config) => {
//     const token = sessionStorage.getItem("token");

//     if (token) {
//       config.headers["Authorization"] = "Bearer " + token;
//     }
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

export default API;
