import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Http } from "@/models";

const axiosInstance = axios.create({
  baseURL: "/api",
});
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  (res) => {
    if (res.data.msg != "ok") {
      return Promise.reject(res.data.msg);
    }
    return Promise.resolve(res);
  },
  (err) => Promise.reject(err)
);

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) =>
      axiosInstance
        .get(url, { params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        })
    );
  },
  post(url, data) {
    return new Promise((resolve, reject) =>
      axiosInstance
        .post(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        })
    );
  },
};

export default http;
