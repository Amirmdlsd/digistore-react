import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "127.0.0.1:3000",
});

export default axiosInstance;
