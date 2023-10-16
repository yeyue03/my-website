import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export const createAxiosByinterceptors = (config?: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create({
    timeout: 3000,
    withCredentials: true, // 跨域携带cookie
    ...config
  })

  instance.interceptors.request.use(
    config => {
      console.log("== config: ", config);
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  )

  instance.interceptors.response.use(
    response => {
      if (response.status === 200 && response.data.code === 200) {
        return response.data.data;
      } else {
        return Promise.reject(response.data.message);
      }

    },
    error => {
      console.log("=== err: ", error);
      
      return Promise.reject(error);
    }
  )

  return instance;
}