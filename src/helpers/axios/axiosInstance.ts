import { baseApi } from "@/config/api";
import axios from "axios";

const instance = axios.create({
  baseURL: baseApi,
  timeout: 60000,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  function (config) {
    // access token
    return config;
  },
  function (error) {
    return error?.response?.data;
  }
);
instance.interceptors.response.use(
  function (config) {
    // access token
    return config;
  },
  function (error) {
    return error?.response?.data;
  }
);

export default instance;
