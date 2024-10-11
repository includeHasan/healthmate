import axios from "axios";

export const api = axios.create({
  baseURL: "https://healthmate-backend.vercel.app",
  withCredentials: true,  
});