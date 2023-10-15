import { baseApi } from "@/config/api";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: baseApi,
  timeout: 60000,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(
  function (config) {
    // access token
    return config;
  },
  function (error) {
    return error?.response?.data;
  }
);
axiosInstance.interceptors.response.use(
  function (config) {
    // access token
    return config;
  },
  function (error) {
    return error?.response?.data;
  }
);

export default axiosInstance;
