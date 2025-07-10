import axios, { InternalAxiosRequestConfig } from "axios";
import Cookies from "cookies-js";

export const api = axios.create({
  baseURL: process.env.VITE_API_URL,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = Cookies.get("access-token");

    if (token && config.headers)
      config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
